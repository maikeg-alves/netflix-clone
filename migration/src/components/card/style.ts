import { Box } from '@mui/material';
import styled from 'styled-components';

type BsPrefixProps = {
  backgroundImage?: string;
  brightness?: number;
};

export const MYCard = styled.div<BsPrefixProps>`
  /*     background-image: url(${(props) => props.backgroundImage}) !important;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 25px; */
  /*  background-color: #fff; */
  /*    width: 260px !important;
    color: white;
    margin-left: 20px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px; */
  /* 
    h2,
    p,
    button {
      margin-top: 5px;
      margin-bottom: 5px;
    } */

  /*.container-button {
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
    } */

  a {
    text-decoration: none;
  }

  h1 {
    font-weight: 300;
  }

  // Base styles
  .card {
    float: left;
    padding: 0 1.7rem;
   /*  width: 50%; */
    min-width: 220px;
    width: 100%;
    color: white;
    background-color: #000 !important;

    &:before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${(props) => props.backgroundImage}) !important;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: brightness(0.8);
      border-radius: 25px;
    }

    &:hover {
      &:before {
        filter: brightness(0.5);
        transition: transform 0.3s;
      }
    }

    .wrapper {
      background-color: transparent;
      min-height: 335px;
      position: relative;
      overflow: hidden;
      &:hover {
        .data {
          transform: translateY(0);
        }
      }
    }

    .data {
      position: absolute;
      bottom: 0;
      width: 100%;
      transform: translateY(calc(135px + 1em));
      transition: transform 0.3s;
      .content {
        position: relative;
        z-index: 1;
      }
      .container-button {
        margin-top: 20px;
      }
    }
    .author {
      font-size: 12px;
    }
    .title {
      margin-top: 10px;
      a {
        text-decoration: none;
        color: white;
      }
    }
    .text {
      height: 70px;
      margin: 0;
      margin-bottom: 10px;
    }
    /*  input[type='checkbox'] {
    display: none;
  } */
    input[type='checkbox']:checked + .menu-content {
      transform: translateY(-60px);
    }
  }

  .assistir {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 10px;
    &:hover {
      background-color: #e0e0e0;
    }
  }

  .like {
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .heart {
      width: 100px;
      height: 100px;
      background: url('https://cssanimation.rocks/images/posts/steps/heart.png')
        no-repeat;
      background-position: 0 0;
      cursor: pointer;
      transition: background-position 1s steps(28);
      transition-duration: 0s;

      &.is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
      }
    }

    body {
      background: #000000;
    }

    .placement {
      /*   position: fixed; */
      /*  top: 50%;
      left: 50%; */
      transform: translate(-50%, -50%);
    }
  }
`;

export const MYBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 350px;
  background-color: black;
  border: 2px solid #000;
  padding: 4px;
  border-radius: 15px;
`;
