import type { AxiosInstance, AxiosResponse } from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    logged: false,
    token: null,
    error: false,
    loading: false,
    name: null,
    showSuccess: false,
  }),
  actions: {
    async login(
      api: AxiosInstance,
      email: string,
      password: string
    ): Promise<any> {
      this.error = false;
      this.loading = true;

      try {
        const response: AxiosResponse = await api.post("/login", {
          email,
          password,
        });

        const loginResponse: LoginResponse = response.data;

        this.logged = true;

        if (loginResponse.data) {
          const token = useCookie("token");
          token.value = loginResponse?.data?.token;
          this.logged = true;
          window.location.href = "/dashboard";
        }
      } catch (error: any) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    async createUser(
      api: AxiosInstance,
      email: string,
      password: string,
      name: string
    ) {
      try {
        this.loading = true;

        await api.post("/user", {
          email: email,
          password: password,
          name: name,
        });

        this.showSuccess = true;
      } catch (error: any) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.logged = false;
      token.value = null;
      window.location.href = "/";
    },
    clearError() {
      this.error = false;
    },
    clearSuccess() {
      this.showSuccess = false;
      window.location.href = "/";
    },
  },
});
