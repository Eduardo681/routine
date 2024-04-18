<script lang="ts">
import Header from '../components/Header.vue';

export default {
    components: {
        Header
    },
    setup: () => {
        definePageMeta({
            middleware: 'auth'
        })
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="background">
                <Header />
                profile
            </div>
        </div>
        <Footer />
    </div>
</template>