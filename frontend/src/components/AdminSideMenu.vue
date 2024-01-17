<script setup lang="ts">
import { ref } from 'vue'
import BrandLogo from 'components/BrandLogo.vue'

const tab = ref('home')

defineEmits(['close'])
</script>
<template>
    <q-card flat class="q-mt-lg">
        <div class="row justify-center">
            <BrandLogo />
        </div>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel
                name="home"
                class="column q-py-xl q-gutter-md justify-end"
            >
                <q-list
                    dense
                    style="font-size: 20px; font-weight: 400"
                    class=""
                >
                    <!-- <q-item clickable v-close-popup>
                        <q-item-section style="text-align: end">
                            <router-link
                                :to="{ name: 'admin.adminUsers.index' }"
                                class="text-black"
                                style="text-decoration: none"
                                >Admin Users</router-link
                            >
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section style="text-align: end">
                            <router-link
                                :to="{ name: 'admin.roles.index' }"
                                class="text-black"
                                style="text-decoration: none"
                                >Roles</router-link
                            >
                        </q-item-section>
                    </q-item>
                    <q-item
                        clickable
                        v-close-popup
                        style="text-align: end"
                        @click="
                            () => {
                                tab = 'help-center'
                            }
                        "
                    >
                        <q-item-section>Help Center</q-item-section>
                    </q-item> -->
                </q-list>
            </q-tab-panel>
            <q-tab-panel
                name="help-center"
                class="column q-py-xl q-gutter-md justify-end"
            >
                <div class="row items-center justify-end q-gutter-sm q-px-md">
                    <q-icon
                        name="keyboard_backspace"
                        size="30px"
                        style="cursor: pointer"
                        @click="
                            () => {
                                tab = 'home'
                            }
                        "
                    />
                </div>
                <q-list
                    dense
                    style="font-size: 20px; font-weight: 400"
                    class=""
                >
                    <!-- <q-item clickable v-close-popup>
                        <q-item-section style="text-align: end">
                            <router-link
                                :to="{
                                    name: 'admin.knowlegebase.content.index'
                                }"
                                class="text-black"
                                style="text-decoration: none"
                                >Knowledgebase Content</router-link
                            >
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section style="text-align: end">
                            <router-link
                                :to="{
                                    name: 'admin.knowlegebase.category.index'
                                }"
                                class="text-black"
                                style="text-decoration: none"
                                >Knowledgebase Categories</router-link
                            >
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section style="text-align: end">
                            <router-link
                                :to="{
                                    name: 'admin.supportTicket.index'
                                }"
                                class="text-black"
                                style="text-decoration: none"
                                >Support tickets</router-link
                            >
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section style="text-align: end">
                            <router-link
                                :to="{
                                    name: 'admin.contactMessage.index'
                                }"
                                class="text-black"
                                style="text-decoration: none"
                                >Contact Messages</router-link
                            >
                        </q-item-section>
                    </q-item> -->
                </q-list>
            </q-tab-panel>
        </q-tab-panels>
    </q-card>
</template>
