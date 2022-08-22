import { EOptionLang } from "@enums";
import { getTexts } from "@language";
import { TContextProps, TSettingsContext } from "@types";
import { useRouter } from "next/router";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const defaultSettingsContext: TSettingsContext = {
  lang: EOptionLang["en-US"]
};

export const Context = createContext({} as TContextProps);

export function ContextProvider(props: { children: ReactNode }) {
  const [settings, setSettings] = useState<TSettingsContext>(defaultSettingsContext);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const { locale } = useRouter();

  const resetContext = () => setSettings(defaultSettingsContext);

  const getText = (text: string) => getTexts(text, settings.lang);

  useEffect(() => (
    setSettings({
      lang: EOptionLang[locale as EOptionLang]
    })
  ),[locale]);

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