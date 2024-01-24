<script setup lang="ts">
import { ApiPortfolioProjectPortfolioProject } from 'app/types/contentTypes'
import ProjectCard from 'src/components/ProjectCard.vue'
import { ref } from 'vue'
import ProjectTagApi from 'src/utils/api/ProjectTagApi'
import { useRoute, useRouter } from 'vue-router'
import { useMetadata } from 'src/composables/useMetadata'

const route = useRoute()
const router = useRouter()

const page = ref(route.query.page ? Number(route.query.page) : 1)
const tag = ref<null | {
    data: {
        id: number
        attributes: ApiPortfolioProjectPortfolioProject['attributes']
    }[]
    meta: any
}>(null)

const fetchProjects = () => {
  ProjectTagApi.find({
    populate: {
      portfolio_projects: {
        populate: {
          thumbnail: {
            fields: ['alternativeText', 'formats']
          }
        },
        pagination: {
          page: page.value || 1,
          pageSize: 25,
          withCount: true
        }
      }
    },
    filters: {
      slug: {
        $eq: route.params.slug as string
      }
    }
  }).then(({ data }) => {
    tag.value = data.value
    useMetadata(data.value?.data[0]?.attributes?.seo)
  })
}

fetchProjects()

const updatePage = (v: number) => {
  router.push({
    name: 'portfolio.projects.index',
    query: { page: page.value }
  })

  fetchProjects()
}
</script>
<template>
    <div class="q-pa-md q-pa-md-xl q-pa-lg-2xl q-col-gutter-lg">
        <h1 class="text-h4">
            All
            <span class="tw-capitalize">
                {{ tag?.data[0]?.attributes?.name }}
            </span>
            Projects
        </h1>
        <div
            class="tw-grid 2xl:tw-grid-cols-4 lg:tw-grid-cols-3 md:tw-grid-cols-2 q-gutter-md"
            v-if="tag"
        >
            <ProjectCard
                v-for="p in tag?.data[0]?.attributes?.portfolio_projects?.data"
                :key="p?.id"
                :img_url="
                    p?.attributes?.thumbnail?.data?.attributes?.formats?.medium
                        ?.url
                "
                :title="p?.attributes?.name"
                :desc="p?.attributes?.description"
                :slug="p?.attributes?.slug"
            />
        </div>
        <div v-if="tag" class="row">
            <q-space />
            <q-pagination
                v-model="page"
                :max="
                    tag?.data[0]?.attributes?.portfolio_projects?.meta
                        ?.pagination?.pageCount
                "
                direction-links
                flat
                color="grey"
                active-color="primary"
                @update:model-value="updatePage"
            />
        </div>
    </div>
</template>
