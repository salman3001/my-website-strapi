<template>
    <q-toggle
        v-model="dark"
        icon="light_mode"
        color="white"
        icon-color="black"
        @update:model-value="(v) => $q.dark.set(v)"
    />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const dark = ref(false)

const $q = useQuasar()
</script>
