import type { AxiosInstance, AxiosResponse } from "axios";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: (): TaskState => ({
    tasks: [],
    error: false,
    loading: false,
    showSuccess: false,
  }),
  actions: {
    async getTasks(api: AxiosInstance, dateInit: string): Promise<any> {
      this.error = false;
      this.loading = true;
      try {
        const response: AxiosResponse = await api.get(
          `/tasks/week?currentDate=${dateInit}`
        );
        this.tasks = response.data.data;
      } catch (error: any) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
