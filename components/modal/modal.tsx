import React, { useContext, ChangeEvent } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CloseOutlined } from "@mui/icons-material";

import { Context } from "@context";
import { EOptionLang } from "@enums"

import styles from "./modal.styles.module.scss";

export const Modal: React.FC = () => {
  const { settings, setShowSettingsModal, getText } = useContext(Context);
  const router = useRouter();

  const handlerHiddemModal = () => {
    setShowSettingsModal(false);
  };

  const handlerRadioBoxChange = (e: ChangeEvent<HTMLInputElement>) => (
    router.push('/', '/', { locale: e.target.value })
  );

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
                value={EOptionLang["en-US"]}
                checked={settings.lang === EOptionLang["en-US"]}
                onChange={handlerRadioBoxChange}
              />
              <label htmlFor={"lang-En"}>{getText("language:en-US")}</label>
            </div>
            <div>
              <input
                id={"lang-PtBR"}
                type={"radio"}
                value={EOptionLang["pt-BR"]}
                checked={settings.lang === EOptionLang["pt-BR"]}
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