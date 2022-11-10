import { Modal } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { getVideo, Responsive } from '../../scripts';
import {
  addwatchedMovies,
  removewatchedMovies,
} from '../../scripts/listuser/listuser';
import { MYBox } from '../card/style';
import Like from '../like/like.component';
import Play from '../play/play';

import { Container } from './style';

type ButtonAddMovieProps = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  children?: React.ReactNode;
};

const ButtonAddMovie: React.FC<ButtonAddMovieProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [video, setVideo] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    const movie = {
      id: props.id,
      title: props.title,
      poster_path: props.poster_path,
      release_date: props.release_date,
    };

    addwatchedMovies(movie);

    setOpen(true);
  };

  const likedMovies = () => {
    const button = document.querySelector('.heart') as HTMLButtonElement | null;
    if (button) {
      button.classList.toggle('is-active');
      if (button?.classList.contains('is-active')) {
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
    const button = document.querySelector('.heart') as HTMLButtonElement | null;

    if (button) {
      const _movie = localStorage.getItem(
        'watchedMovies',
      ) as unknown as ButtonAddMovieProps;
      const _obj = JSON.parse(String(_movie));

      if (_obj) {
        _obj.map((item: ButtonAddMovieProps) => {
          if (item.id === props.id) {
            button.classList.add('is-active');
          }
        });
      }
    }

    getVideo(props.id).then((res) => {
      setVideo(res);
    });
  }, [props.id]);

  return (
    <>
      <Container
        className="my-3"
        justifyContent={Responsive('initial', 'center', 768)}
        xs={12}
      >
        <Col xs="auto">
          <Button
            type="button"
            className="assistir btn btn-light"
            title="assistir"
            disabled={!video}
            onClick={handleClick}
          >
            {video ? 'Asistir' : 'Indisponivel'}
          </Button>
        </Col>

        <Col xs="auto" className="d-flex mx-3">
          <button
            onClick={likedMovies}
            style={{ borderRadius: '5px', width: '100px', height: '40px' }}
          >
            <Like {...props} />
          </button>
        </Col>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MYBox>
          <Play idmovie={video} />
        </MYBox>
      </Modal>
    </>
  );
};

export default ButtonAddMovie;
