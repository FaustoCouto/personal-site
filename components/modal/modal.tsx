import React, { useContext, ChangeEvent } from "react";
import { CloseOutlined } from "@mui/icons-material";

import { Context } from "@context";
import { EOptionLang } from "@enums"

import styles from "./modal.styles.module.scss";

export const Modal: React.FC = () => {
  const { settings, setSettings, setShowSettingsModal, getText } = useContext(Context)

  const handlerHiddemModal = () => {
    setShowSettingsModal(false)
  }

  const handlerRadioBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      lang: e.target.value as EOptionLang,
    });
  }

  return (
    <section className={styles.ModalOverlay}>
      <div>
        <button onClick={handlerHiddemModal}>
          <CloseOutlined />
        </button>
        <div>
          <h1>{getText("idiom:title")}</h1>
          <form>
            <div>
              <input
                id={"lang-En"}
                type={"radio"}
                value={EOptionLang.english}
                checked={settings.lang === EOptionLang.english}
                onChange={handlerRadioBoxChange}
              />
              <label htmlFor={"lang-En"}>{getText("language:en")}</label>
            </div>
            <div>
              <input
                id={"lang-PtBR"}
                type={"radio"}
                value={EOptionLang.portuguese}
                checked={settings.lang === EOptionLang.portuguese}
                onChange={handlerRadioBoxChange}
              />
              <label htmlFor={"lang-PtBR"}>{getText("language:pt-br")}</label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
};