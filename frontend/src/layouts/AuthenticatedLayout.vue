<!-- eslint-disable camelcase -->
<template>
    <q-layout view="lHh lpr lFf">
        <q-toolbar
            class="bg-white text-black"
            style="border: 1px solid rgba(0, 0, 0, 0.106)"
        >
            <q-btn
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
                @click="toggleLeftDrawer"
            />

            <q-toolbar-title>
                <BrandLogo />
            </q-toolbar-title>
            <div class="row q-gutter-sm">
                <div class="gt-sm">
                    <SearchInput />
                </div>
                <NotificationMenu />
                <ProfileMenu />
            </div>
        </q-toolbar>
        <q-toolbar
            v-if="$q.screen.gt.xs"
            class="bg-white text-black"
            style="border: 1px solid rgba(0, 0, 0, 0.106)"
        >
            <div>
                <!-- <NavMenu title="Admin Users">
                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <router-link
                                    :to="{ name: 'admin.adminUsers.index' }"
                                    class="text-black"
                                    style="text-decoration: none"
                                    >Admin Users</router-link
                                >
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <router-link
                                    :to="{ name: 'admin.roles.index' }"
                                    class="text-black"
                                    style="text-decoration: none"
                                    >Roles</router-link
                                >
                            </q-item-section>
                        </q-item>
                    </NavMenu>
                    <router-link
                        :to="{
                            name: 'admin.user.index'
                        }"
                        class="text-black"
                        style="
                            text-decoration: none;
                            text-transform: uppercase;
                            font-weight: 500;
                        "
                    >
                        <q-btn flat> Users </q-btn>
                    </router-link> -->
            </div>
        </q-toolbar>
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
                <slot />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
// eslint-disable camelcase
import { ref } from 'vue'
import SearchInput from 'components/forms/SearchInput.vue'
import BrandLogo from 'components/BrandLogo.vue'
import AdminSideMenu from 'components/AdminSideMenu.vue'
import NotificationMenu from 'components/NotificationMenu.vue'
import ProfileMenu from 'components/ProfileMenu.vue'
import NavMenu from 'components/NavMenu.vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
