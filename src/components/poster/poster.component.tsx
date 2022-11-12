import React from 'react';
import { MYPoster } from './style';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { MYRating } from './style';

interface IPoster {
  id: number;
  poster_path: string; // eslint-disable-line camelcase
  title: string;
  vote_average: number; // eslint-disable-line camelcase
  children?: React.ReactNode;
}

const Poster: React.FC<IPoster> = (props) => {
  const renderRating = (vote: number) => {
    const rating = vote?.toFixed(0);
    const start = Number(rating);
    return start;
  };

  return (
    <>
      <MYPoster>
        <Image
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={props.title}
          width={250}
          height={350}
        />
      </MYPoster>
      <Col xs="auto">
        <MYRating
          name="text-feedback"
          value={!props.vote_average ? 7.0 : renderRating(props.vote_average)}
          readOnly
          max={5}
        />
      </Col>
    </>
  );
};
export default Poster;
