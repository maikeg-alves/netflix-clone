import { Row } from 'react-bootstrap';
import { Card } from '../../components';
import { MYGrid } from './styles';
import Grid from '@mui/material/Grid';
import { IMovies } from '../../interfaces';
import React from 'react';

const GridSearch: React.FC<IMovies[]> = (props) => {
  const [movie, setMovie] = React.useState<IMovies[]>([]);

  React.useEffect(() => {
    setMovie(Object.values(props));
  }, [props]);

  return (
    <MYGrid>
      <Row>
       {/*  <Col xs={12}> */}
          <Grid container spacing={3}>
            {movie.map((item) => (
              <Grid item xs="auto" key={item.id}>
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.overview}
                  poster_path={item.poster_path}
                  original_title={item.original_title}
                  release_date={item.release_date}
                  id={item.id}
                />
              </Grid>
            ))}
          </Grid>
      </Row>
    </MYGrid>
  );
};

export default GridSearch;
