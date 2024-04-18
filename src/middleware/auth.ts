import { useUserStore } from "~/store/userStore";

export default defineNuxtRouteMiddleware((to) => {
  const { logged } = storeToRefs(useUserStore()); // make authenticated state reactive
  const token = useCookie("token"); // get token from cookies

  if (token.value) {
    logged.value = true;
  }

  if (token.value && to?.name === "login") {
    return navigateTo("/");
  }

  if (!token.value && to?.name !== "login") {
    abortNavigation();
    return navigateTo("/");
  }
});
