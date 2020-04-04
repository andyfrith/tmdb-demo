export interface Movie {
  id: number;
  backdrop_path: string;
  imdb_id?: string;
  title: string;
}

export enum SORT_DIR {
  ASC,
  DESC,
}
