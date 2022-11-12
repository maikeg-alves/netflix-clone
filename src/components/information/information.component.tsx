import React from 'react';
import { Col } from 'react-bootstrap';
import { MYInformation } from './style';

interface Iinformation {
  overview: string;
  title: string;
  children?: React.ReactNode;
}

const Information: React.FC<Iinformation> = (props) => {
  return (
    <MYInformation>
      <h3>{props.title ? props.title : 'Caregando...'}</h3>
      <p>
        {props?.overview
          ? props.overview.substring(0, 200) + '...'
          : 'On the other hand, we denounce with righteous indignation and dislike men who are bso beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue'}
      </p>

      <Col xs={12}>{props.children}</Col>
    </MYInformation>
  );
};
export default Information;
