<script setup lang="ts">
// import { RouterLink } from 'vue-router'
</script>
<template>
    <span>
        <RouterLink
            class="text-h6 text-weight-bold text-black"
            style="text-decoration: none"
            :to="{ name: 'home' }"
        >
            Logo
        </RouterLink>
    </span>
</template>
