import type { IMovies } from '../../interfaces'
type Props = {
  movies: IMovies[]
}
export const RandomMovie = (Array: Props) => {
  const random = Math.floor(Math.random() * 20)
  return Array.movies[random]
}
