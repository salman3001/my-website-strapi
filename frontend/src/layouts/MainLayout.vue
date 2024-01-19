<!-- eslint-disable camelcase -->
<template>
    <q-layout
        view="lHh lpR lFf"
        :class="$q.dark.isActive ? 'text-grey-5' : 'text-grey-8'"
    >
        <NavBar />
        <q-page-container>
            <q-page>
                <RouterView />
            </q-page>
        </q-page-container>
        <FooterSection />
    </q-layout>
</template>

<script setup lang="ts">
import NavBar from 'src/components/NavBar.vue'
import FooterSection from 'src/components/FooterSection.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
</script>
