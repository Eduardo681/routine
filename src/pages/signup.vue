<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import Loading from '../components/Loading.vue';
import Modal from '../components/modals/Modal.vue';

export default {
    setup() {
        let email = ref()
        let password = ref()
        let name = ref()
        return {
            email,
            password,
            name
        };
    },
    components: {
        ErrorMessage,
        Field,
        Form,
        Modal,
        Loading,
    },
    methods: {
        signUp() {
            this.getUserStore.createUser(this.$api, this.email.value, this.password.value, this.name.value)
        },
    },
    computed: {
        getUserStore() {
            return this.$userStore;
        }
    }
}
</script>

<template>
    <div class="landing-page">
        <Loading :loading="getUserStore.loading" />
        <Modal :message="$t('errorSignUp')" v-if="getUserStore.error" @close="getUserStore.clearError" error />
        <Modal :message="$t('userSignUpSuccessful')" v-if="getUserStore.showSuccess"
            @close="getUserStore.clearSuccess" />
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
                        <Field type="email" id="email" :name="$t('email')" ref="email" :placeholder="$t('enterEmail')"
                            rules="required|email" />
                        <ErrorMessage :name="$t('email')" />
                    </div>
                    <div class="form-group">
                        <label for="password">{{ $t("password") }}</label>
                        <Field type="password" id="password" :name="$t('password')" ref="password"
                            :placeholder="$t('enterPassword')" rules="required|min:6" />
                        <ErrorMessage :name="$t('password')" />
                    </div>
                    <div class="form-group">
                        <label for="name">{{ $t("name") }}</label>
                        <Field type="text" id="name" :name="$t('name')" ref="name" :placeholder="$t('enterName')"
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
