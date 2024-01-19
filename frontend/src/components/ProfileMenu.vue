<script setup lang="ts">
import { useQuasar } from 'quasar'
// import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// const upload = ref('')
const $q = useQuasar()

const logout = async () => {
  $q.cookies.remove('user')
  $q.cookies.remove('token')
  router.push({ name: 'login' })
}

// onMounted(() => {
//   upload.value = process.env.UPLOAD as string
// })
</script>
<template>
    <q-btn round unelevated>
        <q-avatar size="36px">
            <!-- <img
                :src="
                    auth.user()?.avatar?.url
                        ? upload + auth.user()?.avatar?.url
                        : '/images/sample-dp.png'
                "
            /> -->
            <q-icon name="account_circle"></q-icon>
        </q-avatar>

        <q-menu anchor="bottom left">
            <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup>
                    <q-item-section @click="logout">Sign Out</q-item-section>
                </q-item>
                <!-- <q-item clickable v-close-popup>
          <q-item-section>New incognito tab</q-item-section>
        </q-item>
        <q-separator /> -->
                <!-- <q-item clickable v-close-popup>
          <q-item-section>Recent tabs</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>History</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Downloads</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Settings</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section>Help &amp; Feedback</q-item-section>
        </q-item> -->
            </q-list>
        </q-menu>
    </q-btn>
</template>
