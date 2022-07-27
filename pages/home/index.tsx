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
          <div>
            <div>
              <div>
                <Image layout="fill" src={"/assets/logo-react.svg"} alt={"logo react"} />
              </div>
              <h1>React</h1>
            </div>
            <p>Um biblioteca poderosa para desenvolver aplicações front-end</p>
            <p>Usando desde 2018</p>
          </div>
          <div>
            <h1>node</h1>
          </div>
          <div>
            <h1>postgres</h1>
          </div>
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
          <a href="https://www.instagram.com/faustocouto31/">Instagram</a>
          <a href="https://www.youtube.com/channel/UC1q4etQCsvfJB3Fc24kO0ZQ">Youtube</a>
          <a href="https://www.linkedin.com/in/fausto-couto/">Linkedin</a>
        </article>
      </section>
    </>
  )
}

export default Home