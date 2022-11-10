import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  background-color: #0c0c0c;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;
