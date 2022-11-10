import React from "react";
import { Card, Carousel } from "../../components"
import { IMovies } from "../../interfaces";
import { SwiperSlide} from 'swiper/react';

type Moviespopularity = {
    movies: IMovies[];
};

const Popularity : React.FC<Moviespopularity> = (props) => {


  const [movie, setMovie] = React.useState<IMovies>([] as unknown as IMovies);

  React.useEffect(() => {
    const _movie = props.movies.filter((item) => item.vote_average >= 7 ) as unknown as IMovies;
    setMovie(_movie);
  }, [props]);

    return (
     <Carousel title="Populares">

        {movie?.map((item : IMovies, id: number) => (
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

export default Popularity