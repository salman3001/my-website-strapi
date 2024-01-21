<script setup lang="ts">
import ContactMessageApi from 'src/utils/api/ContactMessageApi'
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const { loading, errorMessage, execute } = ContactMessageApi.create(
  {},
  {
    onSuccess: () => {
      form.email = ''
      form.message = ''
      form.name = ''
      form.phone = ''
    }
  }
)
</script>

<template>
    <div class="contact_us" id="contact">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-h4 tw-font-bold text-secondary">Contact Me</h5>
            <br />
            <span class="text-center text-h6"
                >Let's Connect! Reach Out for Collaboration, Opportunities, or
                Just to Say Hello.</span
            >
        </div>
        <br />
        <div class="tw-text-red-500 tw-py-4" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <q-form
            class="column q-gutter-y-md text-center tw-mb-10 tw-max-w-xl"
            @submit.prevent="
                (v) => {
                    execute({ data: form })
                }
            "
        >
            <q-input
                label="Name"
                v-model="form.name"
                outlined
                :dark="false"
                bg-color="white"
                :rules="[$rules.required('Field in required')]"
            />

            <q-input
                label="Email"
                type="email"
                v-model="form.email"
                outlined
                :dark="false"
                bg-color="white"
                :rules="[
                    $rules.required('Field in required'),
                    $rules.email('Not a valid email')
                ]"
            />
            <q-input
                label="Phone"
                type="number"
                v-model="form.phone"
                outlined
                :dark="false"
                bg-color="white"
                :rules="[
                    $rules.required('Field in required'),
                    $rules.minLength(8, 'Not a valid number')
                ]"
            />
            <q-input
                label="Message"
                type="textarea"
                v-model="form.message"
                outlined
                :dark="false"
                bg-color="white"
                :rules="[$rules.required('Field in required')]"
            />

            <q-btn
                size="lg"
                color="secondary"
                label="Send Message"
                :dark="false"
                bg-color="white"
                type="submit"
                :disable="loading"
                :loading="loading"
            />
        </q-form>
    </div>
</template>
