<script lang="ts">
export default {
  data() {
    return {
      username: '',
      password: ''
    };
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
        <form class="login-form">
          <h2 class="title">{{ $t("login") }}</h2>
          <div class="form-group">
            <label for="username">{{ $t("email") }}</label>
            <input type="text" id="username" v-model="username" :placeholder="$t('enterEmail')">
          </div>
          <div class="form-group">
            <label for="password">{{ $t("password") }}</label>
            <input type="password" id="password" v-model="password" :placeholder="$t('enterPassword')">
          </div>
          <button type="submit">{{ $t("login") }}</button>
          <p>{{ $t("noAccount") }} <nuxt-link to="/signup" class="link">{{ $t("signUp") }}</nuxt-link></p>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>
