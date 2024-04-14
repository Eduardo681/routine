import axios from "axios";
import type { Pinia } from "pinia";
import { useUserStore } from "~/store/userStore";
interface RuntimeConfig {
  API_ENDPOINT: string;
}

export default defineNuxtPlugin((nuxtApp: any) => {
  const config: RuntimeConfig = nuxtApp.$config.public as RuntimeConfig;

  let token: string | null = null;
  if (process.client) {
    token = localStorage.getItem("token");
  }

  const api = axios.create({
    baseURL: config.API_ENDPOINT,
    headers: {
      "x-access-token": `${token}`,
    },
  });

  return {
    provide: {
      userStore: useUserStore(nuxtApp.$pinia as Pinia),
      api: api,
    },
  };
});
