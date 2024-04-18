<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import Loading from '../components/Loading.vue';
import Modal from '../components/modals/Modal.vue';
export default {
  setup() {
    let email = ref()
    let password = ref()
    return {
      email,
      password
    };
  },
  components: {
    ErrorMessage,
    Field,
    Form,
    Modal,
    Loading,
  },
  computed: {
    getUserStore() {
      return this.$userStore;
    }
  },
  methods: {
    login() {
      this.getUserStore.login(this.$api, this.email.value, this.password.value);
    }
  }
}
</script>
<template>
  <div class="landing-page">
    <Loading :loading="getUserStore.loading" />
    <Modal :message="$t('invalidCredentials')" v-if="getUserStore.error" @close="getUserStore.clearError" error />
    <div class="background">
      <div class="content">
        <h1 class="title">Util Routine</h1>
        <p class="description">{{ $t("slogan") }}</p>
        <p class="text">
          {{ $t("allRoutine") }}
        </p>
        <ul class="services">
          <li class="service">{{ $t("tasks") }}</li>
          <li class="service">{{ $t("finances") }}</li>
          <li class="service">{{ $t("health") }}</li>
        </ul>
        <nuxt-link to="/about" class="btn-primary">{{ $t("moreInfo") }} </nuxt-link>
      </div>
      <div class="contact">
        <Form class="login-form" @submit="login">
          <h2 class="title">{{ $t("login") }}</h2>
          <div class="form-group">
            <label for="username">{{ $t("email") }}</label>
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
          <button type="submit">{{ $t("login") }}</button>
          <p>{{ $t("noAccount") }} <nuxt-link to="/signup" class="link">{{ $t("signUp") }}</nuxt-link></p>
        </Form>
      </div>
    </div>
    <Footer />
  </div>
</template>
