import type { AxiosInstance, AxiosResponse } from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: (): CategoryState => ({
    categories: [],
    error: false,
    loading: false,
    showSuccess: false,
  }),
  actions: {
    async getCategories(api: AxiosInstance): Promise<any> {
      this.error = false;
      this.loading = true;
      try {
        const response: AxiosResponse = await api.get(`/categories`);
        this.categories = response.data.data;
        console.log(this.categories);
      } catch (error: any) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
