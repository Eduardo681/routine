<script lang="ts">
import Header from '../components/Header.vue';

export default {
    components: {
        Header
    },
    computed: {
        getTaskStore() {
            return this.$taskStore;
        }
    },
    mounted() {
        this.getTaskStore.getTasks(this.$api, "2024-04-25");
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="background">
                <Header />
                tasks
            </div>
        </div>
        <Footer />
    </div>
</template>