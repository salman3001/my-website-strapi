<template>
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
                        :dark="false"
                        bg-color="white"
                        type="text"
                        placeholder="username@site.com"
                    />
                    <q-btn color="secondary"> Subscribe </q-btn>
                </div>
            </div>
        </form>
    </footer>
</template>
