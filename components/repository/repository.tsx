import React from "react";
import { IRepository } from "types";

interface IProps {
  repositoryList: IRepository[];
}

export const RepositoryList: React.FC<IProps> = ({ repositoryList }) => {

  return <>
    {repositoryList?.map((repo) => (
        <div className="containerRepository" key={repo.id}>
          <div>
            <strong>{repo.name}</strong>
            <p>{repo.forks_count}</p>
            <p>{repo.git_url}</p>
            <p>{repo.clone_url}</p>
          </div>
          <p>{repo.description}</p>
          <div>
            <p>{repo.created_at.toLocaleString()}</p>
            <p>{repo.updated_at.toLocaleString()}</p>
          </div>
          <div>
            <p>{repo.license?.name}</p>
            <p>{repo.private}</p>
          </div>
        </div>
    ))}
  </>
}