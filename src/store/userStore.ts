import type { AxiosInstance } from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    logged: false,
    token: undefined,
  }),
  actions: {
    login() {},
    async createUser(
      api: AxiosInstance,
      email: string,
      password: string,
      name: string
    ) {
      try {
        await api.post("/user", {
          email: email,
          password: password,
          name: name,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
