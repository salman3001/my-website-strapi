<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onMounted } from 'vue'

const $q = useQuasar()

onMounted(() => {
  const darkmode = $q.localStorage.getItem('darkmode')
  if (!darkmode) {
    $q.localStorage.set('darkmode', 'true')
    $q.dark.set(true)
    return
  }

  if (darkmode === 'true') {
    $q.dark.set(true)
  } else {
    $q.dark.set(false)
  }
})
</script>
<template>
    <router-view />
</template>
