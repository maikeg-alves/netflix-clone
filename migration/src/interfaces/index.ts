export interface IMovies {
  map(arg0: (item: IMovies, id: number) => JSX.Element): import("react").ReactNode;
  adult: boolean;
  backdrop_path: string; // eslint-disable-line camelcase
  genre_ids: number[]; // eslint-disable-line camelcase
  id: number;
  original_language: string; // eslint-disable-line camelcase
  original_title: string; // eslint-disable-line camelcase
  overview: string;
  popularity: number;
  poster_path: string; // eslint-disable-line camelcase
  release_date: string; // eslint-disable-line camelcase
  title: string;
  video: boolean;
  vote_average: number; // eslint-disable-line camelcase
  vote_count: number; // eslint-disable-line camelcase
}
[];

export interface Iuser {
  listmovies: [id: number, name: string];
  likedmovies: [id: number, name: string];
  dislikedmovies: [id: number, name: string];
}
