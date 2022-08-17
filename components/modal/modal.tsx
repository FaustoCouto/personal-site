import React, { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";

import styles from "./modal.styles.module.scss";

export const Modal: React.FC = () => {
  const [isBrowser, setIsBrowser] = useState(true);

  const handlerHiddemModal = () => {
    setIsBrowser(false)
  }

  return (
    <section className={styles.ModalOverlay}>
      <div>
        <button onClick={handlerHiddemModal}>
          <CloseOutlined />
        </button>
        <div>
          <h1>Escolha um idioma</h1>
          <form>
            <div>
              <input id={"lang-En"} type={"radio"} name={"english"} value={"english"}/>
              <label htmlFor={"lang-En"}>Inglês</label>
            </div>
            <div>
              <input id={"lang-PtBR"} type={"radio"} name={"portuguese"} value={"portuguese"}/>
              <label htmlFor={"lang-PtBR"}>Português</label>
            </div>
            <button>Salvar</button>
          </form>
        </div>
      </div>
    </section>
  )
};