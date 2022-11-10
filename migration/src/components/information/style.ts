import styled from 'styled-components';

export const MYInformation = styled.div`
  position: relative;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    margin: 10px 0;
  }
  h3,
  p {
    /*     padding: 10px 0; */
    color: ${(props) => props.theme.colors.text};
  }
`;
