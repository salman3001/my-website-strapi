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
                                    login({
                                        identifier: form.identifier,
                                        password: form.password
                                    })
                                "
                            >
                                <div>
                                    <label>Email Or Username</label>
                                    <q-input
                                        outlined
                                        v-model="form.identifier"
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
                                </div>
                                <q-btn
                                    color="primary"
                                    v-if="loading"
                                    :disable="true"
                                    style="width: 100%"
                                >
                                    <q-circular-progress
                                        indeterminate
                                        size="20px"
                                        class="q-px-10"
                                        :thickness="1"
                                        color="grey-8"
                                        track-color="orange-2"
                                        style="min-width: 8rem"
                                    />
                                </q-btn>
                                <q-btn
                                    v-else
                                    type="submit"
                                    color="primary"
                                    style="width: 100%"
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

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { AuthApi } from 'src/utils/api/AuthApi'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const $q = useQuasar()

const isPwd = ref(true)

const form = ref({
  identifier: '',
  password: ''
})

const { login, response, errorMessage, loading } = AuthApi.useLocalLogin(
  {},
  {
    onSuccess() {
      $q.cookies.set('user', response.value?.user as unknown as string)
      $q.cookies.set('token', response.value?.jwt as unknown as string)
      router.push({
        name: 'dashboard'
      })
    }
  }
)
</script>
