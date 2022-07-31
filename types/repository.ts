export interface ILicense {
  name: string
}

export interface IRepository {
  id: string;
  name: string;
  description: string;
  private: boolean;
  git_url: string;
  clone_url: string;
  created_at: Date;
  updated_at: Date;
  fork: boolean;
  forks_count: number;
  license: ILicense;
}