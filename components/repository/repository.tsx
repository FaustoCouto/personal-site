import React from "react";
import { IRepository } from "types";
import {
  BookOutlined,
  ForkRightOutlined,
  ContentCopyOutlined,
  LockOpenOutlined
} from "@mui/icons-material";
import { Badge, Tooltip } from "@mui/material"

import styles from "./repository.styles.module.scss"
import { getText } from "@language";

interface IProps {
  repositoryList: IRepository[];
}

export const RepositoryList: React.FC<IProps> = ({ repositoryList }) => {

  let dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'numeric', day: 'numeric',
  };

  const handlerClickToCopy = (link: string) => {
    navigator.clipboard.writeText(link);
  }

  return (
    <>
      {repositoryList?.map((repo) => (
          <div className={styles.containerRepository} key={repo.id}>
            <div className="header-repository">
              <strong>{repo.name}</strong>
              <div>
                <Badge
                  badgeContent={repo.forks_count}
                  color="primary"
                >
                  <Tooltip placement="top" title={getText("repository:tooltip:fork-quantity")}>
                    <ForkRightOutlined />
                  </Tooltip>
                </Badge>
                <a target={"_blank"} href={repo.clone_url} rel="noreferrer">
                  <Tooltip placement="top" title={getText("repository:tooltip:go-to-repository")}>
                    <BookOutlined />
                  </Tooltip>
                </a>
                <button onClick={() => handlerClickToCopy(repo.clone_url)}>
                  <Tooltip placement="top" title={getText("repository:tooltip:copy-repository-url")}>
                    <ContentCopyOutlined/>
                  </Tooltip>
                </button>
              </div>
            </div>
            <p className="description-repository">
              {repo.description}
            </p>
            <div className="dates">
              <p>
                <strong>{getText("repository:label:create-at")}</strong>
                {new Date(repo.created_at).toLocaleString("pt-BR", dateOptions)}
              </p>
              <p>
                <strong>{getText("repository:label:updated-at")} </strong>
                {new Date(repo.updated_at).toLocaleString("pt-BR", dateOptions)}
              </p>
            </div>
            <div className="footer-repository">
              <p><strong>{getText("repository:label:license")} </strong>{repo.license?.name}</p>
                <Tooltip placement="top" title={getText("repository:tooltip:public-privacity")}>
                  <LockOpenOutlined />
                </Tooltip>
            </div>
          </div>
      ))}
    </>
  )
}