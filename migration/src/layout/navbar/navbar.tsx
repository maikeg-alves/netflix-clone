import React from 'react';
import Image from 'next/image';
import { Nav } from './style';
import { Col } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <div className="d-flex container-fluid justify-content-center">
        <Col xs="auto">
        <a className="navbar-brand py-2" href="#">
          <Image
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="netflix logo"
            width={100}
            height={30}
          />
        </a>
        </Col>
      </div>
    </Nav>
  );
};
export default NavBar;
