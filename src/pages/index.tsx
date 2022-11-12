import React from 'react';
import { NavBar } from '../layout';
import { Container } from '../layout';
import {
  Action,
  Drama,
  Fiction,
  Footer,
  GridSearch,
  Mylist,
  Popularity,
  RandomBanner,
  SearchBar,
} from '../modules';
import { GetServerSideProps, NextPage } from 'next';
import type { IMovies } from '../interfaces';

type PageProps = {
  isAuthanticated: boolean;
  movies: IMovies[];
};

const Home: NextPage<PageProps> = (props) => {
  const [movies, setMovies] = React.useState<IMovies[]>(props.movies);

  const [search, setSearch] = React.useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    const filteredMovies = props.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });

    setMovies(filteredMovies);

    window.scrollTo(0, 500);
  }, [search, props]);

  return (
    <Container title="Netflix clone" direction="column">
      <NavBar />

      <RandomBanner {...props} />

      <SearchBar onChange={handleSearch} />

      <>
        {movies.length === props.movies.length ? (
          <>
            <>
              <Mylist />
            </>
            <>
              <Popularity {...props} />
            </>
            <>
              <Action {...props} />
            </>
            <>
              <Drama {...props} />
            </>
            <>
              <Fiction {...props} />
            </>
          </>
        ) : (
          <>
            <GridSearch {...movies} />

            {movies && movies.length === 0 && (
              <>
                <h1 style={{ color: 'white' }}>No movies found</h1>
              </>
            )}
          </>
        )}
      </>
      <Footer />
    </Container>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=';
    const key = process.env.NEXT_KEY_API;

    const response1 = await fetch(`${url}${key}&language=pt-BR&page=1`);
    const response2 = await fetch(`${url}${key}&language=pt-BR&page=2`);
    const response3 = await fetch(`${url}${key}&language=pt-BR&page=3`);

    const data1 = await response1.json();

    const data2 = await response2.json();

    const data3 = await response3.json();

    if (!data1 || !data2 || !data3) {
      return {
        notFound: true,
      };
    }

    if (data1 && data2 && data3) {
      const movies = [...data1.results, ...data2.results, ...data3.results];

      return {
        props: {
          isAuthanticated: true,
          movies: movies,
        },
      };
    }

    return {
      props: {
        isAuthanticated: false,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { isAuthanticated: false } };
  }
};
