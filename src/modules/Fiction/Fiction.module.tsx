import React from "react";
import { Card, Carousel } from "../../components"
import { IMovies } from "../../interfaces";
import { SwiperSlide} from 'swiper/react';

type Props = {
    movies: IMovies[];
};

const Fiction : React.FC<Props> = (props) => {


    const [movie, setMovie] = React.useState<IMovies>([] as unknown as IMovies);

    React.useEffect(() => {
      
        const horrorMovies = props.movies.filter((movie) => movie.genre_ids.includes(27));
        const fictionMovies = props.movies.filter((movie) => movie.genre_ids.includes(878));
        const _movies = [...horrorMovies, ...fictionMovies] as unknown as IMovies;

        setMovie(_movies);
      
    }, [props.movies]);
    

    return (
     <Carousel title="Ficção e Terror">

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

export default Fiction