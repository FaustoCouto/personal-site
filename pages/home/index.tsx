import Head from "next/head"
import Image from "next/image"
import styles from "./styles.module.scss"

const Home = () => {
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
            <Image layout="fill" src={"https://avatars.githubusercontent.com/u/18406651?v=4"} alt={"Fausto"} />
          </div>
          <h1>Fausto Couto</h1>
          <h2>Desenvolvedor de software</h2>
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
            <p>Uma biblioteca JavaScript para criar interfaces de usuário.</p>
            <p>Utilizando desde 2018.</p>
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
            <p>Utilizado em estudos.</p>
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
            <p>Utilizando desde 2018.</p>
          </article>
        </article>
      </section>
      <section className={styles.schedulesContainer}>
        <header>
          <h1>Agenda de projetos</h1>
        </header>
        <article>
        </article>
      </section>
      <section className={styles.contactContainer}>
        <header>
          <h1>Deseja entrar em contato? Me manda um e-mail</h1>
        </header>
        <article className={styles.contactBody}>
          <p>faustocouto31@hotmail.com</p>
        </article>
      </section>
      <section className={styles.socialContainer}>
        <article>
          <a target={"_blank"} href="https://www.instagram.com/faustocouto31/" rel="noreferrer">Instagram</a>
          <a target={"_blank"} href="https://www.youtube.com/channel/UC1q4etQCsvfJB3Fc24kO0ZQ" rel="noreferrer">Youtube</a>
          <a target={"_blank"} href="https://www.linkedin.com/in/fausto-couto/" rel="noreferrer">Linkedin</a>
        </article>
      </section>
    </>
  )
}

export default Home