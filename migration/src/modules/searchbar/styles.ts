import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Search = styled(Col)`
  display: flex;
  margin: 30px 0;
  justify-content: center;
  input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.5;
    color: #495057;
    background-color: #252525;
    background-clip: padding-box;
    border: 1px solid #2b2b2b;
    border-radius: 2.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
    &:focus {
      color: #dcdcdc;
      background-color: #2a2a2a;
      border-color: #2b2b2b;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 25%);
    }
  }

`;
