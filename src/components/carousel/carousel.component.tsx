import React from 'react';
import { Container } from './style';
import { Swiper } from 'swiper/react';

import { Col } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
  children: React.ReactNode;
  title: string;
}
[];

const Carousel: React.FC<CarouselProps> = (props) => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 70,
    },
  };

  return (
    <Container>
      <Col xs={12} className="title">
        <h2> {props.title} </h2>
      </Col>
      <Swiper breakpoints={breakpoints}>{props.children}</Swiper>
    </Container>
  );
};

export default Carousel;
