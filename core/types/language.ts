import { EOptionLang } from "@enums";
import { textsPtBr, textEn } from "@translations";

export type TLang = {
  "pt-BR": EOptionLang | typeof textsPtBr;
  "en-US": EOptionLang | typeof textEn;
}