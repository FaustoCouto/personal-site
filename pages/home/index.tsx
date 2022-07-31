import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"

import { RepositoryList } from "@components";
import { IRepository } from "types";

import styles from "./styles.module.scss"

const Home = () => {
  const [repoList, setRepoList] = useState<IRepository[]>([]);

  const getRepoList = useCallback(async () => {
    const repo = await fetch("https://api.github.com/users/faustocouto/repos");
    const response = repo.json() as Promise<IRepository[]>
    const myRepoList = await (await response).filter((repository) => 
      repository.fork === false && repository.private === false
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
            <Image layout="fill" src={"/assets/settings-icon.svg"} alt={"Ícone de configurações"}/>
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
        <article>
          <header>
            <div>
              <Image layout="fill" src={"/assets/logo-react.svg"} alt={"logo react"} />
            </div>
            <h1>React</h1>
          </header>
          <article>
            <div>
              <Image layout="fill" src={"/assets/experience-design.svg"} alt={"design ui"} />
            </div>
            <p>Uma biblioteca JavaScript para criar interfaces de usuário tanto para web quanto para mobile (iOS e android) com react-native.</p>
          </article>
        </article>
        <article>
          <header>
            <div className={styles.largeLogo}>
              <Image layout="fill" src={"http://nodejs.org/static/images/logo.svg"} alt={"logo node"} />
            </div>
          </header>
          <article>
            <div>
              <Image layout="fill" src={"/assets/server-cluster.svg"} alt={"design server"} />
            </div>
            <p>Node.js® é um runtime JavaScript construído no mecanismo JavaScript V8 do Chrome.</p>
          </article>
        </article>
        <article>
          <header>
            <div>
              <Image layout="fill" src={"/assets/logo-postgresql.png"} alt={"logo postgresql"} />
            </div>
            <h1>PostgreSQL</h1>
          </header>
          <article>
            <div>
              <Image layout="fill" src={"/assets/server.svg"} alt={"logo database"} />
            </div>
            <p>O PostgreSQL é um sistema de banco de dados objeto-relacional de código aberto com uma forte reputação de confiabilidade, robustez de recursos e desempenho.</p>
          </article>
        </article>
      </section>
      <section className={styles.repoContainer}>
        <header>
          <h1>Meus repositórios públicos</h1>
        </header>
        <article>
          <RepositoryList repositoryList={memoRepoList} />
        </article>
      </section>
      <section className={styles.contactContainer}>
        <header>
          <h1>Deseja entrar em contato? Me manda um e-mail.</h1>
        </header>
        <article className={styles.contactBody}>
          <a href="mailto:faustocouto31@hotmail.com">faustocouto31@hotmail.com</a>
        </article>
      </section>
      <section className={styles.socialContainer}>
        <article>
          <div>
            <div className="instagram-logo">
              <Image layout="fill" src={"/assets/instagram-logo.png"} alt={"logo instagram"} />
            </div>
            <a target={"_blank"} href="https://www.instagram.com/faustocouto31/" rel="noreferrer">Instagram</a>
          </div>
          <div>
            <div className="youtube-logo">
              <Image layout="fill" src={"/assets/youtube-logo.png"} alt={"logo youtube"} />
            </div>
            <a target={"_blank"} href="https://www.youtube.com/channel/UC1q4etQCsvfJB3Fc24kO0ZQ" rel="noreferrer">Youtube</a>
          </div>
          <div>
            <div className="linkedin-logo">
              <Image layout="fill" src={"/assets/linkedin-logo.png"} alt={"logo linkedin"} />
            </div>
            <a target={"_blank"} href="https://www.linkedin.com/in/fausto-couto/" rel="noreferrer">Linkedin</a>
          </div>
        </article>
      </section>
    </>
  )
}

export default Home