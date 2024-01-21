<script setup lang="ts">
import { useQuasar } from 'quasar'
import { AuthApi } from 'src/utils/api/authApi'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isPwd = ref(true)

const form = ref({
  username: '',
  email: '',
  password: ''
})

const { register, errorMessage, loading } = AuthApi.useRegister(
  {},
  {
    onSuccess() {
      router.push({ name: 'login' })
    }
  }
)
</script>
<template>
    <q-layout>
        <q-page-container>
            <q-page
                class="row items-center justify-evenly"
                style="
                    background-image: url('/images/login-bg.png');
                    background-repeat: no-repeat;
                    background-position: center;
                "
            >
                <div class="q-pa-md">
                    <q-card
                        class="my-card q-pa-md"
                        style="min-width: 400px; border-radius: 15px"
                    >
                        <q-card-section>
                            <div class="row justify-center">
                                <BrandLogo />
                            </div>
                            <div class="text-h5 text-weight-bold text-center">
                                Welcome Back!
                            </div>
                            <div class="text-body2 text-grey-8 text-center">
                                Please enter your crendtials to login
                            </div>
                        </q-card-section>
                        <q-card-section v-if="errorMessage">
                            <div class="text-red">
                                {{ errorMessage }}
                            </div>
                        </q-card-section>
                        <q-card-section class="q-pt-none">
                            <form
                                class="q-gutter-y-md"
                                @submit.prevent="
                                    register({
                                        ...form
                                    })
                                "
                            >
                                <div>
                                    <label>Username</label>
                                    <q-input
                                        outlined
                                        v-model="form.username"
                                        dense
                                    />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <q-input
                                        outlined
                                        type="email"
                                        v-model="form.email"
                                        dense
                                    />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <q-input
                                        dense
                                        v-model="form.password"
                                        outlined
                                        :type="isPwd ? 'password' : 'text'"
                                    >
                                        <template v-slot:append>
                                            <q-icon
                                                :name="
                                                    isPwd
                                                        ? 'visibility_off'
                                                        : 'visibility'
                                                "
                                                class="cursor-pointer"
                                                @click="isPwd = !isPwd"
                                            />
                                        </template>
                                    </q-input>
                                    <div
                                        class="full-width tw-pt-2 text-secondary flex items-end tw-flex-col"
                                    >
                                        <router-link :to="{ name: 'login' }"
                                            >Already havea an account?
                                            Login</router-link
                                        >
                                    </div>
                                </div>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    style="width: 100%"
                                    :disable="loading"
                                    :loading="loading"
                                    >Submit</q-btn
                                >
                            </form>
                        </q-card-section>
                    </q-card>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
