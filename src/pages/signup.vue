<script lang="ts">
export default {
    data() {
        return {
            email: '',
            password: '',
            name: ''
        };
    },
    methods: {
        signUp() {
            // TODO
            console.log("ok")
        }
    }
}
</script>
<template>
    <div class="landing-page">
        <div class="background">
            <div class="content">
                <h1 class="title">Util Routine</h1>
                <p class="description">{{ $t("slogan") }}</p>
                <p class="text">
                    {{ $t("welcome") }}
                </p>
            </div>
            <div class="contact">
                <form class="login-form">
                    <h2 class="title">{{ $t("signUp") }}</h2>
                    <div class="form-group">
                        <label for="email">{{ $t("email") }}</label>
                        <input type="text" id="email" required v-model="email" :placeholder="$t('enterEmail')">
                    </div>
                    <div class="form-group">
                        <label for="password">{{ $t("password") }}</label>
                        <input type="password" id="password" v-model="password" :placeholder="$t('enterPassword')">
                    </div>
                    <div class="form-group">
                        <label for="name">{{ $t("name") }}</label>
                        <input id="password" v-model="name" :placeholder="$t('enterName')">
                    </div>
                    <button type="submit" @click.prevent="signUp">{{ $t("signUp") }}</button>
                    <nuxt-link class="link" to="/">{{ $t("login") }}</nuxt-link>
                </form>
            </div>
        </div>
        <Footer />
    </div>
</template>
