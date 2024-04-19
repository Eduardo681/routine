import { useUserStore } from "~/store/userStore";

export default defineNuxtRouteMiddleware((to) => {
  const { logged } = storeToRefs(useUserStore());
  const token = useCookie("token");

  if (token.value) {
    logged.value = true;
  }

  if (token.value && to?.name === "login") {
    console.log("aqui");
    console.log(token.value);
    return navigateTo("/");
  }

  if (!token.value && to?.name !== "login") {
    console.log("aqui1");
    console.log(token.value);
    abortNavigation();
    return navigateTo("/");
  }
});
