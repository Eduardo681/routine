<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true,
            default: false,
        }
    }
};
</script>

<template>
    <div v-if="loading" class="loading-overlay">
        <div class="spinner"></div>
    </div>
</template>
