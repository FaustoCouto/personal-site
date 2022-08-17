import { textsPtBr } from "./translations/pt-br";
import { textEn } from "./translations/en";

interface ILange {
  ptbr: typeof textsPtBr;
  en: typeof textEn;
}

const lang:ILange = {
  "ptbr": textsPtBr,
  "en": textEn
}

export function getText(param: string) {
  return Object(lang["ptbr"])[param];
}