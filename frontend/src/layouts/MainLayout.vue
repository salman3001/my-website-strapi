<!-- eslint-disable camelcase -->
<template>
    <q-layout view="lHh lpr lFf">
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
        <footer class="row justify-between q-pa-lg text-white bg-primary">
            <nav class="column">
                <header class="footer-title">Services</header>
                <a>Branding</a>
                <a>Design</a>
                <a>Marketing</a>
                <a>Advertisement</a>
            </nav>
            <nav class="column">
                <header class="footer-title">Company</header>
                <a>About us</a>
                <a>Contact</a>
                <a>Jobs</a>
                <a>Press kit</a>
            </nav>
            <nav class="column">
                <header class="footer-title">Legal</header>
                <a>Terms of use</a>
                <a>Privacy policy</a>
                <a>Cookie policy</a>
            </nav>
            <form>
                <header>Newsletter</header>
                <div>
                    <label>
                        <span>Enter your email address</span>
                    </label>
                    <div class="row">
                        <q-input
                            outlined
                            dense
                            bg-color="white"
                            type="text"
                            placeholder="username@site.com"
                        />
                        <q-btn color="secondary"> Subscribe </q-btn>
                    </div>
                </div>
            </form>
        </footer>
    </q-layout>
</template>

<script setup lang="ts">
// eslint-disable camelcase
import { ref, computed } from 'vue'
import SearchInput from 'components/forms/SearchInput.vue'
import BrandLogo from 'components/BrandLogo.vue'
import AdminSideMenu from 'components/AdminSideMenu.vue'
import NotificationMenu from 'components/NotificationMenu.vue'
import ProfileMenu from 'components/ProfileMenu.vue'
import NavMenu from 'components/NavMenu.vue'
import ThemeTogel from 'src/components/ThemeTogel.vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import router from 'src/router'
const $q = useQuasar()

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
