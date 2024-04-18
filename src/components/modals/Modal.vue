<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        error: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>
<template>
    <div class="modal" v-if="message">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div :class="{ 'modal-header': true, error: error, success: !error }">
                <!-- TODO - ADD ICONS -->
                <h2>{{ error ? $t("error") : $t("success") }}</h2>
            </div>
            <div class="modal-body">
                <p>{{ message }}</p>
            </div>
            <div class="modal-footer">
                <button @click="closeModal">OK</button>
            </div>
        </div>
    </div>
</template>
