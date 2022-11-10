import styled from 'styled-components';
import { Rating } from '@mui/material';

export const MYPoster = styled.div`
  width: 100%;
  height: auto;

  span {
    border: 1px solid #000 !important;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

export const MYRating = styled(Rating)`
  border: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;
