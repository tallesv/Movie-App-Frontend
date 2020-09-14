import React from 'react';

import { Content } from './style';

interface MovieProps {
  title: string;
  releaseDate: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieProps> = ({
  title,
  releaseDate,
  posterPath,
}: MovieProps) => {
  return (
    <Content urlImage={posterPath}>
      <h3>{`${title} (${new Date(releaseDate).getFullYear()})`}</h3>
    </Content>
  );
};

export default MovieCard;
