<script setup lang="ts">
defineProps<{
    name: string
    imgSrc: string
    progress: number
}>()
</script>
<template>
    <div class="tw-flex tw-justify-start tw-items-center tw-gap-4 tw-w-full">
        <div class="tw-flex tw-justify-center tw-items-center tw-gap-4 text-h6">
            <q-img
                :src="imgSrc"
                height="50px"
                width="50px"
                class="tw-rounded-md"
            />
            {{ name }}
        </div>
        <q-linear-progress
            :value="progress"
            size="lg"
            color="secondary "
            track-color="grey"
        />
        <div>{{ progress * 100 }}%</div>
    </div>
</template>
