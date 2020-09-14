import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContentProps {
  urlImage: string;
}

export const Content = styled.div<ContentProps>`
  width: 215px;
  height: 306px;
  border-radius: 5px;
  background-image: url('https://image.tmdb.org/t/p/w500${props =>
    props.urlImage}');
  background-repeat: no-repeat;
  background-size: cover;

  h3 {
    display: none;
  }

  &:hover {
    cursor: pointer;
    h3 {
      display: flex;
      justify-content: center;
      padding: 10px 5px;
      color: #fffaf0;
    }
  }
`;
