import { EOptionLang } from "@enums";
import { textsPtBr, textEn } from "@translations";
import { TLang } from "@types";

const langs: TLang = {
  "ptbr": textsPtBr,
  "en": textEn
}

export function getTexts(text: string, idiom: EOptionLang) {
  return Object(langs[idiom])[text];
}