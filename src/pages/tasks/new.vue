<script lang="ts">
export default {
    data() {
        return {
            formData: {
                title: '',
                frequency: '',
                priority: '',
                dateStart: '',
                dateEnd: '',
                startTime: '',
                endTime: '',
                categoryID: null
            }
        };
    },
    methods: {
        submitForm() {
            // Aqui você pode enviar os dados do formulário para o servidor
            console.log(this.formData);
        }
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="background">
                <Header />
                <div class="col-12">
                    <h2>Nova tarefa</h2>
                    <form @submit.prevent="submitForm">
                        <div class="col-12">
                            <div class="col-6">
                                <div>
                                    <div class="form-group">
                                        <label for="title">Title</label>
                                        <input type="text" id="title" v-model="formData.title">
                                    </div>
                                    <div class="form-group">
                                        <label for="frequency">Frequency</label>
                                        <input type="text" id="frequency" v-model="formData.frequency">
                                    </div>
                                    <div class="form-group">
                                        <label for="priority">Priority</label>
                                        <input type="text" id="priority" v-model="formData.priority">
                                    </div>
                                    <div class="form-group">
                                        <label for="categoryID">Category ID</label>
                                        <input type="number" id="categoryID" v-model.number="formData.categoryID">
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="dateStart">Date Start</label>
                                    <input type="date" id="dateStart" v-model="formData.dateStart">
                                </div>
                                <div class="form-group">
                                    <label for="dateEnd">Date End</label>
                                    <input type="date" id="dateEnd" v-model="formData.dateEnd">
                                </div>
                                <div class="form-group">
                                    <label for="startTime">Start Time</label>
                                    <input type="time" id="startTime" v-model="formData.startTime">
                                </div>
                                <div class="form-group">
                                    <label for="endTime">End Time</label>
                                    <input type="time" id="endTime" v-model="formData.endTime">
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="col-6">
                                <button class="btn-secondary" type="submit">Voltar</button>
                            </div>
                            <div class="col-6">
                                <button class="col-6 btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />

    </div>
</template>