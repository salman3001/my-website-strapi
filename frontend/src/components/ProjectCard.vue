<script setup lang="ts">
defineProps<{
    title: string
    desc: string
    img_url: string
    slug: string
}>()
</script>

<template>
    <q-card class="my-card" flat bordered>
        <q-img :src="img_url" />

        <q-card-section>
            <div class="text-overline text-orange-9">Overline</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
            <div class="text-caption text-grey">
                {{ desc }}
            </div>
        </q-card-section>

        <q-card-actions>
            <router-link
                :to="{
                    name: 'portfolio.projects.show',
                    params: { slug: slug }
                }"
            >
                <q-btn flat color="secondary" label="View" />
            </router-link>
        </q-card-actions>
    </q-card>
</template>
