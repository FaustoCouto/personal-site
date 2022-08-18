import { EOptionLang } from "@enums";
import {
  Dispatch,
  SetStateAction,
} from "react";

export type TSettingsContext = {
  lang: EOptionLang
}

export type TContextProps = {
  settings: TSettingsContext,
  setSettings: Dispatch<SetStateAction<TSettingsContext>>,
  showSettingsModal: boolean,
  setShowSettingsModal: Dispatch<SetStateAction<boolean>>,
  getText: (text: string) => string,
}