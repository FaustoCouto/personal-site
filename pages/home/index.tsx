import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"

import { RepositoryList, Modal } from "@components";
import { getText } from "@language";
import { IRepository } from "types";

import { ListTechnologies } from "@components";

import styles from "./styles.module.scss";

const Home = () => {
  const [repoList, setRepoList] = useState<IRepository[]>([]);

  const getRepoList = useCallback(async () => {
    const repo = await fetch("https://api.github.com/users/faustocouto/repos");
    const response = repo.json() as Promise<IRepository[]>
    const myRepoList = await (await response).filter((repository) => 
      repository.fork === false
    )
    setRepoList(myRepoList);
  }, []);

  useEffect(() => {
    getRepoList();
  }, [getRepoList]);

  const memoRepoList = useMemo(() => repoList, [repoList]);

  return (
    <>
      <Head>
        <title>Home | Fausto Couto</title>
      </Head>
      <section className={styles.headerContainer}>
        <header>
          <button>
            <Image layout="fill" src={"/assets/icons/settings-icon.svg"} alt={"Ícone de configurações"}/>
          </button>
          <div>
            <Image layout="fill" src={"https://avatars.githubusercontent.com/u/18406651?v=4"} alt={"Fausto photo"} />
          </div>
          <h1>Fausto Couto</h1>
          <h2>Desenvolvedor de software</h2>
          <h3>Desde 2016</h3>
        </header>
      </section>
      <section className={styles.stackContainer}>
        <header>
          <h1>{getText("technologies:title")}</h1>
        </header>
        <ListTechnologies />
      </section>
      <section className={styles.repoContainer}>
        <header>
          <h1>{getText("repository:title")}</h1>
        </header>
        <article>
          <RepositoryList repositoryList={memoRepoList} />
        </article>
      </section>
      <section className={styles.contactContainer}>
        <header>
          <h1>Deseja entrar em contato? Me manda um e-mail.</h1>
        </header>
        <article>
          <a href="mailto:faustocouto31@hotmail.com">faustocouto31@hotmail.com</a>
        </article>
      </section>
      <section className={styles.socialContainer}>
        <article>
          <div>
            <div className="instagram-logo">
              <Image layout="fill" src={"/assets/logo-social/instagram-logo.png"} alt={"logo instagram"} />
            </div>
            <a target={"_blank"} href="https://www.instagram.com/faustocouto31/" rel="noreferrer">Instagram</a>
          </div>
          <div>
            <div className="youtube-logo">
              <Image layout="fill" src={"/assets/logo-social/youtube-logo.png"} alt={"logo youtube"} />
            </div>
            <a target={"_blank"} href="https://www.youtube.com/channel/UC1q4etQCsvfJB3Fc24kO0ZQ" rel="noreferrer">Youtube</a>
          </div>
          <div>
            <div className="linkedin-logo">
              <Image layout="fill" src={"/assets/logo-social/linkedin-logo.png"} alt={"logo linkedin"} />
            </div>
            <a target={"_blank"} href="https://www.linkedin.com/in/fausto-couto/" rel="noreferrer">Linkedin</a>
          </div>
        </article>
      </section>
      <Modal />
    </>
  )
}

export default Home