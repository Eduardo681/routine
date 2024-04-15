import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    logged: false,
    token: undefined,
    error: null,
    loading: false,
  }),
  actions: {
    async createUser(api, email, password, name) {
      try {
        this.loading = true;

        let response = await api.post("/user", {
          email: email,
          password: password,
          name: name,
        });

        this.logged = true;
        this.token = response.data.token;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
      } catch (error) {
        this.error = "Error creating user: " + error.message;
      } finally {
        this.loading = false;
      }
    },
    clearError() {
      this.error = null;
    },
  },
});
