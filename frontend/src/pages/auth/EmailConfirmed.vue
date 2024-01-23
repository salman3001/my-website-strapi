<template>
    <div class="flex flex-center tw-flex-col tw-h-screen text-h6">
        <div>Thank you for varifying your email</div>
        <div>
            <router-link :to="{ name: 'login' }">
                <q-btn color="secondary">Login</q-btn>
            </router-link>
        </div>
    </div>
</template>
