<script>
import util from "~/util/util.ts";
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    mixins: [util]
}
</script>
<template>
    <div v-for="(dayData, date) in data" :key="date" class="task-card">
        <h2 class="date">{{ formatDate(date) }}</h2>
        <div v-for="task in dayData.tasks" :key="task.id" class="task" :class="{ 'done': task.done }">
            <input :id="`task-${task.id}`" v-model="task.done" type="checkbox">
            <label :for="`task-${task.id}`">{{ task.title }}</label>
            <div class="time-container">
                <span class="time">{{ formatTime(task.start_time) }}</span>
                <span class="time">{{ formatTime(task.end_time) }}</span>
            </div>
        </div>
    </div>
</template>
