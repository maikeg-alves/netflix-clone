type Props = {
  id: number;
  title: string;
  poster_path: string;
  release_date : string;
};

export const addwatchedMovies = ({ id, title, poster_path, release_date }: Props) => {
  if (typeof window !== 'undefined') {
    //ANNOTATION: captura o filme que o usuário clicou
    const listmovies = { id: id, title: title, poster_path: poster_path, release_date: release_date };

    //ANNOTATION: verifica se o localstorage já tem algum filme
    if (localStorage.getItem('watchedMovies') !== null && localStorage.getItem('watchedMovies') !== undefined) {
      const movies = JSON.parse(localStorage.getItem('watchedMovies') || '{}');
      const movie = movies.find((movie: Props) => movie.id === id);

      //ANNOTATION: se o filme não existir no localstorage, ele adiciona
      if (movie === undefined) {
        movies.push(listmovies); // add new movie
        localStorage.setItem('watchedMovies', JSON.stringify(movies));
      }
    } else {
      //ANNOTATION: se não tiver nenhum filme, adiciona o primeiro
      const list = [listmovies];
      localStorage.setItem('watchedMovies', JSON.stringify(list));
    }


  }
};

export const getwatchedMovies = () => {
  if (typeof window !== 'undefined' ) {
    const listmovies = localStorage.getItem('watchedMovies');
    if (listmovies !== null && listmovies !== undefined) {
      return JSON.parse(listmovies);
    }

  }
};

export const removewatchedMovies = (id: number) => {
  if (typeof window !== 'undefined') {
    //remove movie

    if(localStorage.getItem('watchedMovies') !== null && localStorage.getItem('watchedMovies') !== undefined){
    const movies = JSON.parse(localStorage.getItem('watchedMovies') || '{}');
    const movie = movies.find((movie: Props) => movie.id === id);
    if (movie !== undefined) {
      const index = movies.indexOf(movie);
      movies.splice(index, 1);
      localStorage.setItem('watchedMovies', JSON.stringify(movies));
    }
  }

  }
};

