import React from 'react';
import { Col } from 'react-bootstrap';
import { Information, Poster } from '../../components';
import ButtonAddMovie from '../../components/addmovie/buttonaddmovie.component';
import type { IMovies } from '../../interfaces';
import { RandomMovie, Responsive } from '../../scripts';
import { Random } from './style';

type PosterProps = {
  movies: IMovies[];
};

const RandomBanner: React.FC<PosterProps> = (props) => {
  const [movie, setMovie] = React.useState<IMovies>([] as unknown as IMovies);

  React.useEffect(() => {
    const _movie = RandomMovie(props);
    setMovie(_movie);
  }, [props.movies]);

  return (
    <Random
      xs={12}
      image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      direction={Responsive('row', 'column', 768)}
      alignText={Responsive('initial', 'center', 768)}
    >
      <Col xs={12} className="ramdom-grup">
        <Col xs="auto">
          <Poster {...movie} />
        </Col>
        <Col xs={12} className="text-grup">
          <Information {...movie}>
            <ButtonAddMovie {...movie} />
          </Information>
        </Col>
      </Col>
    </Random>
  );
};
export default RandomBanner;
