<template>
    <div class="modal" v-if="errorMessage">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class="modal-header">
                <i class="fas fa-exclamation-circle"></i>
                <h2>Error</h2>
            </div>
            <div class="modal-body">
                <p>{{ errorMessage }}</p>
            </div>
            <div class="modal-footer">
                <button @click="closeModal">OK</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        errorMessage: {
            type: String,
            required: true
        }
    },
    methods: {
        closeModal() {
            // Emit an event to close the modal
            this.$emit('close');
        }
    }
};
</script>
