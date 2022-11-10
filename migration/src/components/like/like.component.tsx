import { Checkbox } from '@mui/material';
import React from 'react';
import { Container } from './style';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { addwatchedMovies, removewatchedMovies } from '../../scripts';

type Props = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Like: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(false);

  const likedMovies = () => {
  
    if (typeof props.id === 'number') {

      setChecked((prev) => !prev); 
      
      if (!checked) {

        const movie = {
          id: props.id,
          title: props.title,
          poster_path: props.poster_path,
          release_date: props.release_date,
        };

        addwatchedMovies(movie);
         
        
      } else {

        removewatchedMovies(props.id);
      }

    }
  };


  React.useEffect(() => {
    const _movie = localStorage.getItem('watchedMovies') as unknown as Props;
    const _obj = JSON.parse(String(_movie));

    if (_obj) {
      _obj.map((item: Props) => {
        if (item.id === props.id) {
          setChecked(true);
        }
      });
    }
  }, [props.id]);

  return (
    <Container>
      <Checkbox
        {...label}
        icon={<AiOutlineHeart />}
        checkedIcon={<AiTwotoneHeart />}
        checked={checked}
        onClick={likedMovies}
      />
    </Container>
  );
};

export default Like;
