<template>
    <header class="header">
        <div class="logo">
            <img src="~/assets/images/logo.png" alt="Logo">
        </div>
        <nav class="nav">
            <ul>
                <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
                <li><nuxt-link to="/tasks">{{ $t("tasks") }}</nuxt-link></li>
                <li><nuxt-link to="/goals">{{ $t("goals") }}</nuxt-link></li>
                <li><nuxt-link to="/finances">{{ $t("finances") }}</nuxt-link></li>
                <li><nuxt-link to="/diet">{{ $t("diet") }}</nuxt-link></li>
                <li><nuxt-link to="/train">{{ $t("train") }}</nuxt-link></li>
                <li><a to="/logout">{{ $t("logout") }}</a></li>
            </ul>
        </nav>
    </header>
</template>
