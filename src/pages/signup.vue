<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
export default {
    components: {
        ErrorMessage,
        Field,
        Form
    },
    data() {
        return {
            email: '',
            password: '',
            name: ''
        };
    },

    methods: {
        signUp() {
            this.$userStore.createUser(this.$api, this.email, this.password, this.name)
        }
    }
}
</script>

<template>
    <div class="landing-page">
        <div class="background">
            <div class="col col-8 content">
                <h1 class="title">Util Routine</h1>
                <p class="description">{{ $t("slogan") }}</p>
                <p class="text">
                    {{ $t("welcome") }}
                </p>
            </div>
            <div class="col col-4 contact">
                <Form class="login-form" @submit="signUp">
                    <h2 class="title">{{ $t("signUp") }}</h2>
                    <div class="form-group">
                        <label for="email">{{ $t("email") }}</label>
                        <Field type="email" id="email" :name="$t('email')" v-model="email"
                            :placeholder="$t('enterEmail')" rules="required|email" />
                        <ErrorMessage :name="$t('email')" />
                    </div>
                    <div class="form-group">
                        <label for="password">{{ $t("password") }}</label>
                        <Field type="password" id="password" :name="$t('password')" v-model="password"
                            :placeholder="$t('enterPassword')" rules="required|min:6" />
                        <ErrorMessage :name="$t('password')" />
                    </div>
                    <div class="form-group">
                        <label for="name">{{ $t("name") }}</label>
                        <Field type="text" id="name" :name="$t('name')" v-model="name" :placeholder="$t('enterName')"
                            rules="required" />
                        <ErrorMessage :name="$t('name')" />
                    </div>
                    <button type="submit">{{ $t("signUp") }}</button>
                    <nuxt-link class="link" to="/">{{ $t("login") }}</nuxt-link>
                </Form>
            </div>
        </div>
        <Footer />
    </div>
</template>
