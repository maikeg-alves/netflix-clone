import { Col } from 'react-bootstrap';
import styled from 'styled-components';

type Props = {
  direction: string;
  image: string;
  alignText: string;
};

export const Random = styled(Col)<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;

  .ramdom-grup {
    padding: 20px 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: center;
    align-items: center;

    .text-grup {
      display: flex;
      align-items: center;
      text-align: ${(props) => props.alignText};
      margin: 0 20px;
    }
  }

  &:before {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
