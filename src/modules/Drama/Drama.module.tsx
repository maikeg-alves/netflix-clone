import React from "react";
import { SwiperSlide } from "swiper/react";
import { Card, Carousel } from "../../components";
import type { IMovies } from "../../interfaces";

type Props = {
    movies: IMovies[];
}

const Drama : React.FC<Props> = (props) => {

    const [movie, setMovie] = React.useState<IMovies>([] as unknown as IMovies);

    React.useEffect(() => {
      
        const dramaMovies = props.movies.filter((movie) => movie.genre_ids.includes(18));

        const _movies = [...dramaMovies] as unknown as IMovies;

        setMovie(_movies);
      
    }, [props.movies]);

  
      return (
       <Carousel title="Drama">
  
          {movie.map((item : IMovies, id: number) => (
              <SwiperSlide key={id}>
                  <Card
                      title={item.title}
                      description={item.overview}
                      poster_path={item.poster_path}
                      original_title={item.original_title}
                      release_date={item.release_date}
                      id={item.id}
                  />
              </SwiperSlide>
          ))}
  
       </Carousel>
      )
}

export default Drama;