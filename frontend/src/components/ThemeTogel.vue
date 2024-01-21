<template>
    <q-toggle
        v-model="dark"
        icon="light_mode"
        color="white"
        icon-color="black"
        @update:model-value="
            (v) => {
                $q.dark.set(v)
                if (v) {
                    $q.localStorage.set('darkmode', 'true')
                } else {
                    $q.localStorage.set('darkmode', 'false')
                }
            }
        "
    />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()

const darkmode = $q.localStorage.getItem('darkmode')

const dark = ref(darkmode === 'true')
</script>
