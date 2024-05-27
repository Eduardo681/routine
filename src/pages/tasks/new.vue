<script lang="ts">
import { ErrorMessage, Field, Form, } from 'vee-validate';
import Loading from '~/components/Loading.vue';
import ModalInput from '~/components/modals/ModalInput.vue';

export default {
    setup() {
        let title = ref()
        let frequency = ref()
        let priority = ref()
        let dateStart = ref()
        let dateEnd = ref()
        let startTime = ref()
        let endTime = ref()
        let category = ref()
        let modalOpen = ref()

        let frequencyOptions = ref([
            { value: 'daily' },
            { value: 'mondayToFriday' },
            { value: 'weekly' },
            { value: 'monthly' },
            { value: 'yearly' },
            { value: 'unique' }
        ]);

        let priorityOptions = ref([
            { value: 'important' },
            { value: 'essential' },
            { value: 'normal' }
        ]);

        let categoryOptions = ref([]);

        return {
            title, frequency, priority, dateStart, dateEnd, startTime, endTime, category, frequencyOptions, priorityOptions, categoryOptions, modalOpen
        };
    },
    mounted() {
        this.getCategoryStore.getCategories(this.$api);
    },
    computed: {
        getTaskStore() {
            return this.$taskStore;
        },
        getCategoryStore() {
            return this.$categoryStore;
        }
    },
    methods: {
        submitForm() {
            let taskData = {
                title: this.title,
                frequency: this.frequency,
                priority: this.priority,
                dateStart: this.dateStart,
                dateEnd: this.dateEnd,
                startTime: this.startTime,
                endTime: this.endTime,
                category: this.category,
            }
            console.log(taskData);
        },
        closeModal() {
            this.modalOpen = false;
        },
        openModal() {
            this.modalOpen = true;
        }
    },
    components: {
        ErrorMessage,
        Field,
        Form,
        Loading,
        ModalInput
    },
}
</script>

<template>
    <div>
        <div class="container">
            <div class="background">
                <Header />
                <ModalInput :title="$t('invalidCredentials')" v-if="modalOpen" @close="closeModal" error />

                <div class="col-12">
                    <h2>{{ $t("newTask") }}</h2>
                    <Form @submit.prevent="submitForm">
                        <div class="col-12">
                            <div class="col-6">
                                <div>
                                    <div class="form-group">
                                        <label for="title">{{ $t("title") }}</label>
                                        <Field type="text" id="title" :name="$t('title')" v-model="title"
                                            :placeholder="$t('enterTitle')" rules="required" />
                                        <ErrorMessage :name="$t('title')" />
                                    </div>
                                    <div class="form-group">
                                        <label for="frequency">{{ $t("frequency") }}</label>
                                        <Field type="select" as="select" id="frequency" :name="$t('frequency')"
                                            v-model="frequency" :placeholder="$t('enterFrequency')" rules="required">
                                            <option v-for="f in frequencyOptions" :value="f.value">{{ $t(f.value) }}
                                            </option>
                                        </Field>
                                        <ErrorMessage :name="$t('frequency')" />
                                    </div>
                                    <div class="form-group">
                                        <label for="priority">{{ $t("priority") }}</label>
                                        <Field type="select" as="select" id="priority" :name="$t('priority')"
                                            v-model="priority" :placeholder="$t('enterPriority')" rules="required">
                                            <option v-for="p in priorityOptions" :value="p.value">{{ $t(p.value) }}
                                            </option>
                                        </Field>
                                        <ErrorMessage :name="$t('priority')" />
                                    </div>
                                    <div class="form-group">
                                        <label for="category">{{ $t("category") }}</label>
                                        <Field type="select" as="select" id="category" :name="$t('category')"
                                            v-model="category" :options="categoryOptions" rules="required">
                                            <option v-for="c in getCategoryStore.categories" :value="c.id">{{
                                                c.title }} </option>
                                        </Field>
                                        <ErrorMessage :name="$t('category')" />
                                    </div>
                                    <button type="button" @click="openModal" class="link">+ Adicionar categoria</button>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="dateStart">{{ $t("dateStart") }}</label>
                                    <Field type="date" id="dateStart" :name="$t('dateStart')" v-model="dateStart"
                                        rules="required" />
                                    <ErrorMessage :name="$t('date')" />
                                </div>
                                <div class="form-group">
                                    <label for="dateEnd">{{ $t("dateEnd") }}</label>
                                    <Field type="date" id="dateEnd" :name="$t('dateEnd')" v-model="dateEnd"
                                        rules="required" />
                                    <ErrorMessage :name="$t('date')" />
                                </div>
                                <div class="form-group">
                                    <label for="startTime">{{ $t("startTime") }}</label>
                                    <Field type="time" id="startTime" :name="$t('startTime')" v-model="startTime"
                                        rules="required" />
                                    <ErrorMessage :name="$t('time')" />
                                </div>
                                <div class="form-group">
                                    <label for="endTime">{{ $t("endTime") }}</label>
                                    <Field type="time" id="endTime" :name="$t('endTime')" v-model="endTime"
                                        rules="required" />
                                    <ErrorMessage :name="$t('time')" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="col-6">
                                <button class="btn-secondary" type="button">{{ $t("back") }}</button>
                            </div>
                            <div class="col-6">
                                <button class="col-6 btn-primary" type="submit">{{ $t("save") }}</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
