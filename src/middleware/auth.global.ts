import { useUserStore } from "~/store/userStore";

export default defineNuxtRouteMiddleware((to) => {
  setTimeout(() => {
    if (process.server) return;
    const unloggedPages = ["/", "index", "signup", "about"];
    const { logged } = storeToRefs(useUserStore());
    const token = useCookie("token");

    if (token.value) {
      logged.value = true;
    }

    if (
      token.value &&
      typeof to?.name === "string" &&
      to?.name !== null &&
      to?.name !== undefined &&
      unloggedPages.includes(to?.name)
    ) {
      return navigateTo("/dashboard");
    }

    if (
      !token.value &&
      typeof to?.name === "string" &&
      to?.name !== null &&
      to?.name !== undefined &&
      !unloggedPages.includes(to?.name)
    ) {
      return navigateTo("/");
    }
  });
});
