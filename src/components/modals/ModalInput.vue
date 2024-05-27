<script>
export default {
    props: {
        title: {
            type: String,
            required: true
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
    <div class="modal" v-if="title">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class='modal-header'>
                <h2>{{ $t(title) }}</h2>
            </div>
            <div class="modal-body">
                <input />
            </div>
            <div class="modal-footer">
                <div class="col-12">
                    <div class="col-6">
                        <button class="btn-secondary" type="button">{{ $t("back") }}</button>
                    </div>
                    <div class="col-6">
                        <button class="col-6 btn-primary" type="submit">{{ $t("save") }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
