<script lang="ts">
export default {
    setup() {
        let menuOpen = ref<boolean>(true);

        const menuToggler = () => {
            menuOpen.value = !menuOpen.value;
        };

        return {
            menuOpen,
            menuToggler
        };
    },
    methods: {
        logout() {
            this.$userStore.logUserOut()
        }
    }
}
</script>
<template>
    <div class="header">
        <div class="header__content">
            <div>
                <img src="~assets/images/logo.png" alt="Logo" class="logo">
            </div>
            <div>
                <nav class="nav" v-if="menuOpen">
                    <RouterLink class="nav__item" to="/dashboard">Dashboard</RouterLink>
                    <RouterLink class="nav__item" to="/tasks">{{ $t("tasks") }}</RouterLink>
                    <RouterLink class="nav__item" to="/goals">{{ $t("goals") }}</RouterLink>
                    <RouterLink class="nav__item" to="/finances">{{ $t("finances") }}</RouterLink>
                    <RouterLink class="nav__item" to="/diet">{{ $t("diet") }}</RouterLink>
                    <RouterLink class="nav__item" to="/train">{{ $t("train") }}</RouterLink>
                    <RouterLink class="nav__item" to="/profile">{{ $t("profile") }}</RouterLink>
                    <a @click="logout" class="nav__item">{{ $t("logout") }}</a>
                </nav>
            </div>
            <div>
                <button class="header__toggler" @click="menuToggler">
                    <img class="icon" v-if="menuOpen" src="~assets/images/menu-open.svg" />
                    <img class="icon" v-else="menuOpen" src="~assets/images/menu-close.svg" />
                </button>
            </div>
        </div>
    </div>
</template>
