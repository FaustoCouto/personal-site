import React from "react";
import Image from "next/image"

import styles from "./technologies.styles.module.scss";

interface ITechList {
  label?: string,
  image: string,
  alt: string
}

const techList: ITechList[] = [
  {
    label: "React",
    image: "logo-react.svg",
    alt: "logo react"
  },
  {
    label: "React-Native",
    image: "logo-react.svg",
    alt: "logo react"
  },
  {
    image: "logo-node.svg",
    alt: "logo node"
  },
  {
    label: "PostgreSQL",
    image: "logo-postgresql.png",
    alt: "logo postgresql"
  },
  {
    label: "TypeScript",
    image: "logo-typescript.svg",
    alt: "logo typescript"
  },
  {
    label: "JavaScript",
    image: "logo-javascript.png",
    alt: "logo javascript"
  },
  {
    label: "Redux",
    image: "logo-redux.svg",
    alt: "logo redux"
  },
  {
    label: "CSS 3",
    image: "logo-css-3.png",
    alt: "logo css 3"
  },
  {
    image: "styled-components-logo.png",
    alt: "logo styled components"
  },
  {
    label: "SASS",
    image: "logo-sass.svg",
    alt: "logo sass"
  },
  {
    label: "Jest",
    image: "logo-jest.svg",
    alt: "logo jest"
  },
  {
    label: "HTML 5",
    image: "logo-html-5.png",
    alt: "logo html 5"
  },
  {
    image: "logo-mongodb.svg",
    alt: "logo mongodb"
  },
  {
    image: "logo-redis.svg",
    alt: "logo redis"
  }
];

export const ListTechnologies = () => (
  <article className={styles.ContainerListTechnologies}>
    {techList.map((tech) => (
        <article key={tech.label + tech.image}>
          <header>
            <div className={tech.label ? styles.smallLogo : styles.largeLogo}>
              <Image layout="fill" src={`/assets/logo-technologies/${tech.image}`} alt={tech.alt} />
            </div>
            {tech.label && <h1>{tech.label}</h1>}
          </header>
        </article>
      ))}
  </article>
)