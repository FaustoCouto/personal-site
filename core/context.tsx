import { EOptionLang } from "@enums";
import { getTexts } from "@language";
import { TContextProps, TSettingsContext } from "@types";
import {
  createContext,
  useState,
  ReactNode,
} from "react";

const emptySettingsContext: TSettingsContext = {
  lang: EOptionLang.english
}

export const Context = createContext({} as TContextProps);

export function ContextProvider(props: { children: ReactNode }) {
  const [settings, setSettings] = useState<TSettingsContext>(emptySettingsContext);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const resetContext = () => setSettings(emptySettingsContext);

  const getText = (text: string) => getTexts(text, settings.lang);

  const value = {
    settings,
    setSettings,
    showSettingsModal,
    setShowSettingsModal,
    resetContext,
    getText
  };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}