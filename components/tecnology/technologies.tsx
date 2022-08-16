import React from "react";
import Image from "next/image"

import styles from "./technologies.styles.module.scss";

interface ITechList {
  label?: string,
  image: string
}

const techList: ITechList[] = [
  {
    label: "React",
    image: "logo-react.svg",
  },
  {
    label: "React-Native",
    image: "logo-react.svg",
  },
  {
    image: "logo-node.svg",
  },
  {
    label: "PostgreSQL",
    image: "logo-postgresql.png",
  },
  {
    label: "TypeScript",
    image: "logo-typescript.svg",
  },
  {
    label: "JavaScript",
    image: "logo-javascript.png",
  },
  {
    label: "Redux",
    image: "logo-redux.svg",
  },
  {
    label: "CSS 3",
    image: "logo-css-3.png",
  },
  {
    image: "styled-components-logo.png",
  },
  {
    label: "SASS",
    image: "logo-sass.svg",
  },
  {
    label: "Jest",
    image: "logo-jest.svg",
  },
  {
    label: "HTML 5",
    image: "logo-html-5.png",
  },
  {
    image: "logo-mongodb.svg",
  },
  {
    image: "logo-redis.svg",
  }
];

export const ListTechnologies = () => (
  <article className={styles.ContainerListTechnologies}>
    {techList.map((tech) => (
        <article key={tech.label}>
          <header>
            <div className={tech.label ? styles.smallLogo : styles.largeLogo}>
              <Image layout="fill" src={`/assets/logo-technologies/${tech.image}`} alt={"logo react"} />
            </div>
            {tech.label && <h1>{tech.label}</h1>}
          </header>
        </article>
      ))}
  </article>
)