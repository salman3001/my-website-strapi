<script setup lang="ts">
import { useMetadata } from 'src/composables/useMetadata'
import PortfolioProjectsApi from 'src/utils/api/PortfolioProjectsApi'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref<null | Record<any, any>>(null)

PortfolioProjectsApi.find({
  fields: ['name', 'description', 'content'],
  populate: {
    thumbnail: {
      fields: ['alternativeText', 'formats']
    },
    project_tags: {
      fields: ['*']
    },
    seo: {
      populate: {
        metaImage: {
          fields: ['formats']
        }
      }
    }
  },
  filters: {
    slug: { $eq: route.params.slug as string }
  }
}).then(({ data }) => {
  project.value = data.value
  useMetadata(data.value?.data[0]?.attributes?.seo)
})
</script>
<template>
    <div
        class="q-pa-md q-pa-md-xl q-pa-lg-2xl q-gutter-xl"
        v-if="project?.data[0]"
    >
        <div class="row q-gutter-md justify-between">
            <div class="tw-space-y-4">
                <h1 class="text-h3">
                    {{ project?.data[0]?.attributes?.name }}
                </h1>
                <p class="text-body1">
                    {{ project?.data[0]?.attributes?.description }}
                </p>
            </div>
            <div
                class="flex flex-center q-gutter-md"
                v-if="project?.data[0]?.attributes?.project_tags?.data"
            >
                <router-link
                    v-for="p in project?.data[0]?.attributes?.project_tags
                        ?.data"
                    :to="{
                        name: 'portfolio.projects.tags.index',
                        params: { slug: p?.attributes?.slug }
                    }"
                    :key="p?.id"
                >
                    <q-badge
                        outline
                        color="secondary"
                        :label="p?.attributes?.name"
                        class="tw-text-lg"
                    />
                </router-link>
            </div>
        </div>
        <q-img
            :src="
                project?.data[0]?.attributes?.thumbnail?.data?.attributes
                    ?.formats?.medium?.url
            "
            :ratio="16 / 8"
            class="tw-max-w-[1000px]"
        />
        <p
            class="text-body1"
            v-html="project?.data[0]?.attributes?.content"
        ></p>
    </div>
</template>
