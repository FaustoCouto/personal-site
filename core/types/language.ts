import { EOptionLang } from "@enums";
import { textsPtBr, textEn } from "@translations";

export type TLang = {
  ptbr: EOptionLang | typeof textsPtBr;
  en: EOptionLang | typeof textEn;
}