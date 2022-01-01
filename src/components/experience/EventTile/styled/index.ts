import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  getBrandFontColor,
  getBrandFontHlColor,
  getBrandShadeColor,
} from 'activate-components';

export const Tile = styled(Link)`
  margin-bottom: 32px;
`

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
`;

export const AddTile = styled.button`
  border: 1px solid ${getBrandFontColor};
  background-color: transparent;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 360px;
  cursor: pointer;
  transition: all linear 150ms;

  &:hover {
    background-color: ${getBrandShadeColor};
  }
  &:focus {
    border-color: ${getBrandFontHlColor};
    background-color: ${getBrandShadeColor};
  }
  &:active {
    transform: scale(0.99);
  }
`;
