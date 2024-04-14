import { localize, setLocale } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import pt_BR from "@vee-validate/i18n/dist/locale/pt_BR.json";

import { email, min, required } from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";

export default defineNuxtPlugin((nuxtApp: any) => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);

  setLocale("pt");

  configure({
    generateMessage: localize({
      en,
      pt: pt_BR,
    }),
  });
});
