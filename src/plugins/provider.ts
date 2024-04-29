import axios from "axios";
import type { Pinia } from "pinia";
import { useTaskStore } from "~/store/taskStore";
import { useUserStore } from "~/store/userStore";
interface RuntimeConfig {
  API_ENDPOINT: string;
}

export default defineNuxtPlugin((nuxtApp: any) => {
  const config: RuntimeConfig = nuxtApp.$config.public as RuntimeConfig;

  let token;
  token = useCookie("token");

  const api = axios.create({
    baseURL: config.API_ENDPOINT,
    headers: {
      "x-access-token": `${token.value}`,
    },
  });

  return {
    provide: {
      userStore: useUserStore(nuxtApp.$pinia as Pinia),
      taskStore: useTaskStore(nuxtApp.$pinia as Pinia),
      api: api,
    },
  };
});
