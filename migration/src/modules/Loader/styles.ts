import styled from 'styled-components';

export const Spinner = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: inherit;
  }

  &:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ff00cc 0%, #212121 50%);
    animation: spin 0.5s infinite linear;
  }

  &:after {
    width: 85%;
    height: 85%;
    background-color: #212121;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
