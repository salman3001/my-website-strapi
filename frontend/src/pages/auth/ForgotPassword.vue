<script setup lang="ts">
import { AuthApi } from 'src/utils/api/authApi'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  email: ''
})

const { execute, errorMessage, loading } = AuthApi.useForgotPassword(
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
                                Forgota Password?
                            </div>
                            <div class="text-body2 text-grey-8 text-center">
                                Please enter your email to recieve pass reset
                                link
                            </div>
                        </q-card-section>
                        <q-card-section v-if="errorMessage">
                            <div class="text-red">
                                {{ errorMessage }}
                            </div>
                        </q-card-section>
                        <q-card-section class="q-pt-none">
                            <q-form
                                class="q-gutter-y-md"
                                @submit.prevent="
                                    execute({
                                        ...form
                                    })
                                "
                            >
                                <div>
                                    <label>Email</label>
                                    <q-input
                                        outlined
                                        v-model="form.email"
                                        dense
                                        :rules="[
                                            $rules.required(
                                                'Field in required'
                                            ),
                                            $rules.email('Email is invalid')
                                        ]"
                                    />
                                </div>
                                <q-btn
                                    type="submit"
                                    color="primary"
                                    style="width: 100%"
                                    :disable="loading"
                                    :loading="loading"
                                    >Submit</q-btn
                                >
                            </q-form>
                        </q-card-section>
                    </q-card>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
