/* import { Col } from 'react-bootstrap'; */
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .card {
    border-radius: 25px;
    background-color: #fff;
    width: 260px !important;
    color: #000;
    margin-left: 20px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;

    h2,
    p,
    button {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .container-button {
      display: flex;
      justify-content: space-between;

      button {
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        width: 100px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const CarouselItem = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #5e4c5a;
  border-radius: 10pt;
  padding: 0.5em;
`;
