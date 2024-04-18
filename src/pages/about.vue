<template>
    <div class="container">
        <div class="background">
            <div class="content about">
                <h1 class="title">Util Routine - {{ $t("about") }}</h1>
                <p class="description">{{ $t("slogan") }}</p>
                <p class="text">
                    {{ $t("aboutUs") }}
                </p>
                <h2>{{ $t("tasksManagement") }}</h2>
                <p class="text">
                    {{ $t("tasksManagementText") }}
                </p>
                <h2>{{ $t("goalsAbout") }}</h2>
                <p class="text">
                    {{ $t("goalsText") }}
                </p>

                <h2>{{ $t("dietPlanning") }}</h2>
                <p class="text">
                    {{ $t("dietPlanningText") }}
                </p>
                <h2>{{ $t("financesPlanning") }}</h2>
                <p class="text">
                    {{ $t("financesPlanningText") }}
                </p>
                <br>
                <p class="text">
                    {{ $t("conclusionAbout") }}
                </p>
                <nuxt-link to="/signup" class="btn-primary">{{ $t("signUp") }} </nuxt-link>
                <br>
            </div>
        </div>
        <Footer />
    </div>
</template>
