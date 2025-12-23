import { uz } from "./uz"
import { tr } from "./tr"
import { ru } from "./ru"
import { en } from "./en"
import type { Language, Translation } from "./types"

export const translations: Record<Language, Translation> = {
  uz,
  tr,
  ru,
  en,
}

export { Language, Translation } from "./types"
