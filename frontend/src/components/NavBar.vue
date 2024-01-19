<template>
    <q-header reveal>
        <q-toolbar class="q-py-sm">
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
            <div class="row q-gutter-sm items-center">
                <div class="q-gutter-x-sm gt-sm">
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
                        </NavMenu> -->
                    <router-link
                        :to="{
                            name: 'portfolio'
                        }"
                        class="text-white"
                        style="
                            text-transform: uppercase;
                            font-weight: 500;
                            text-decoration: underline;
                        "
                    >
                        <q-btn
                            flat
                            dense
                            :style="{
                                textDecoration:
                                    currentRouteName === 'portfolio'
                                        ? 'underline'
                                        : 'none'
                            }"
                        >
                            Portfolio
                        </q-btn>
                    </router-link>
                    <router-link
                        :to="{
                            name: 'portfolio'
                        }"
                        class="text-white"
                        style="
                            text-transform: uppercase;
                            font-weight: 500;
                            text-decoration: underline;
                        "
                    >
                        <q-btn
                            flat
                            dense
                            :style="{
                                textDecoration:
                                    currentRouteName === 'portfolio'
                                        ? 'underline'
                                        : 'none'
                            }"
                        >
                            Portfolio
                        </q-btn>
                    </router-link>
                    <router-link
                        :to="{
                            name: 'portfolio'
                        }"
                        class="text-white"
                        style="
                            text-transform: uppercase;
                            font-weight: 500;
                            text-decoration: underline;
                        "
                    >
                        <q-btn
                            flat
                            dense
                            :style="{
                                textDecoration:
                                    currentRouteName === 'portfolio'
                                        ? 'underline'
                                        : 'none'
                            }"
                        >
                            Portfolio
                        </q-btn>
                    </router-link>
                </div>
                <div>
                    <SearchInput />
                </div>
                <div class="gt-sm">
                    <ThemeTogel />
                    <NotificationMenu />
                    <ProfileMenu />
                </div>
            </div>
        </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered behavior="mobile" elevated>
        <div class="tw-w-full tw-h-full tw-bg-black"></div>
        <AdminSideMenu />
    </q-drawer>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import SearchInput from 'components/forms/SearchInput.vue'
import BrandLogo from 'components/BrandLogo.vue'
import NotificationMenu from 'components/NotificationMenu.vue'
import ProfileMenu from 'components/ProfileMenu.vue'
import ThemeTogel from 'src/components/ThemeTogel.vue'
import { useRoute } from 'vue-router'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
