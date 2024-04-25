import es from "./es.json";
import en from "./en.json";

type langType = "es" | "en";

type Dictionary = typeof es;

export const translate = (key: string): Dictionary =>
  key.includes("es") ? es : en;
