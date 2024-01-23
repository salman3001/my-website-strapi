<script setup lang="ts">
import { ApiPortfolioProjectPortfolioProject } from 'app/types/contentTypes'
import ProjectCard from 'src/components/ProjectCard.vue'
import { ref } from 'vue'
import PortfolioPorjectsApi from 'src/utils/api/PortfolioProjectsApi'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const page = ref(route.query.page ? Number(route.query.page) : 1)
const projects = ref<null | {
    data: {
        id: number
        attributes: ApiPortfolioProjectPortfolioProject['attributes']
    }[]
    meta: any
}>(null)

const fetchProjects = () => {
  PortfolioPorjectsApi.find({
    populate: {
      thumbnail: {
        fields: ['alternativeText', 'formats']
      }
    },
    pagination: {
      page: page.value
    }
  }).then(({ data }) => {
    projects.value = data.value
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
    <div class="q-pa-md q-pa-md-xl q-pa-lg-2xl">
        <div
            class="tw-grid xl:tw-grid-cols-4 lg:tw-grid-cols-3 md:tw-grid-cols-2 q-gutter-md"
            v-if="projects"
        >
            <ProjectCard
                v-for="p in projects.data"
                :key="p?.id"
                :img_url="
                    p?.attributes?.thumbnail?.data?.attributes?.formats
                        ?.thumbnail?.url
                "
                :title="p?.attributes?.name"
                :desc="p?.attributes?.description"
                :slug="p?.attributes?.slug"
            />
        </div>
        <div v-if="projects" class="row">
            <q-space />
            <q-pagination
                v-model="page"
                :max="projects.meta?.pagination?.pageCount"
                direction-links
                flat
                color="grey"
                active-color="primary"
                @update:model-value="updatePage"
            />
        </div>
    </div>
</template>
