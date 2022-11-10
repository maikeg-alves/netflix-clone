import { Modal } from '@mui/material';
import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Play from '../play/play';
import { getVideo } from '../../scripts';
import Like from '../like/like.component';
import { MYBox, MYCard } from './style';

type CardProps = {
  id: number;
  title: string;
  description: string;
  poster_path: string;
  original_title: string;
  release_date: string;
};

const Card: React.FC<CardProps> = (props) => {
  //formating date in day/month/year

  const [open, setOpen] = React.useState(false);
  const [video, setVideo] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const date = new Date(props.release_date);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const monthName = months[month - 1];

  React.useEffect(() => {
    getVideo(props.id).then((res) => {
      setVideo(res);
    });
  }, []);

  return (
    <>
      <MYCard
        backgroundImage={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        key={props.id}
      >
        <div className="example-2 card">
          <div className="wrapper">
            <div className="header d-flex justify-content-between align-items-center">
              <Col xs="auto" className="date">
                <span className="day">{day}</span>
                <span className="month">{monthName}</span>
                <span className="year">{year}</span>
              </Col>

              <Col xs="auto">
                <Like {...props} />
              </Col>
            </div>
            <div className="data">
              <div className="content my-3">
                <span className="author">{props.original_title}</span>
                <h1 className="title">
                  <a href="#">{props.title ? props.title : 'sem dados'}</a>
                </h1>
                <p className="text my-3">
                  {props.description
                    ? props.description.substring(0, 87)
                    : 'The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.'}
                </p>
                <Col xs={12} className="d-flex justify-content-evenly">
                  <Col xs="auto">
                    <Button
                      type="button"
                      className="assistir btn btn-light"
                      title="assistir"
                      disabled={!video}
                      onClick={handleOpen}
                    >
                      {video ? 'Asistir Trailer' : 'Trailer indisponivel'}
                    </Button>
                  </Col>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </MYCard>

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

export default Card;
