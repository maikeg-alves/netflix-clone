import styled from 'styled-components';

type Props = {
  theme: {
    colors: {
      primary: string;
    };
  };
};

export const Container = styled.div<Props>`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
  }

  /*   p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  } */
`;
