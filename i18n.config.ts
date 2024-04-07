import en from "./src/translations/en.json";
import pt from "./src/translations/pt.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: {
    en,
    pt,
  },
}));
