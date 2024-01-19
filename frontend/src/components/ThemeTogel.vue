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
import { onMounted, ref } from 'vue'

const dark = ref(false)

const $q = useQuasar()

onMounted(() => {
  const darkmode = $q.localStorage.getItem('darkmode')
  if (!darkmode) {
    $q.localStorage.set('darkmode', 'true')
    $q.dark.set(true)
    dark.value = true
    return
  }

  if (darkmode === 'true') {
    $q.dark.set(true)
    dark.value = true
  } else {
    $q.dark.set(false)
    dark.value = false
  }
})
</script>
