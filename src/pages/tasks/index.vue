<script lang="ts">
import Header from '~/components/Header.vue';

export default {
    components: {
        Header
    },
    computed: {
        getTaskStore() {
            return this.$taskStore;
        }
    },
    methods: {
        changeDate(event: Event) {
            this.getTaskStore.getTasks(this.$api, (event.target as HTMLInputElement).value);
        },
        newTask() {
            this.$router.push('/tasks/new');
        }
    },
    mounted() {
        this.getTaskStore.getTasks(this.$api, this.date);
    },
    data() {
        return {
            date: new Date().toISOString().substr(0, 10)
        }
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="background">
                <Header />
                <div class="task-page-container">
                    <input type="date" class="task-date" v-model="date" @change="changeDate">
                    <div class="task-container">
                        <TaskCard :data="getTaskStore.tasks"></TaskCard>
                    </div>
                    <button class="floating-button" @click="newTask">+</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>