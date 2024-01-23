<script setup lang="ts">
import { AuthApi } from 'src/utils/api/authApi'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isPwd = ref(true)

const form = ref({
  password: '',
  passwordConfirmation: '',
  code: (route.query.code as string) || ''
})

const { execute, errorMessage, loading } = AuthApi.useResetPassword(
  {},
  {
    onSuccess() {
      router.push({
        name: 'login'
      })
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
                                Reset Your Password!
                            </div>
                            <div class="text-body2 text-grey-8 text-center">
                                Please choose a new password
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
                                @submit.prevent="execute(form)"
                            >
                                <div>
                                    <label>New Password</label>
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
                                <div>
                                    <label>Cofirm Password</label>
                                    <q-input
                                        dense
                                        v-model="form.passwordConfirmation"
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
