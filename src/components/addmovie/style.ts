import { Col } from 'react-bootstrap';
import styled from 'styled-components';


type Props = {
  justifyContent : string;
};

export const Container = styled(Col)<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  margin: 20px auto;
  .assistir {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #e0e0e0;
    }
  }

`;
