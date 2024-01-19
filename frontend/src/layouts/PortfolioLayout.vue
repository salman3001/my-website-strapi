<template>
    <q-layout view="lHh lpr lFf">
        <NavBar />
        <q-drawer
            :behavior="'mobile'"
            v-model="leftDrawerOpen"
            show-if-above
            bordered
        >
            <AdminSideMenu />
        </q-drawer>
        <q-page-container>
            <q-page>
                <RouterView />
            </q-page>
        </q-page-container>
        <FooterSection />>
    </q-layout>
</template>

<script setup lang="ts">
import FooterSection from 'src/components/FooterSection.vue'
import NavBar from 'src/components/NavBar.vue'
</script>
