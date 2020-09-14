import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import api from '../../services/api';

import { Title, Form, SearchContent } from './styles';

import MovieCard from '../../components/movieCard';

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
}

export const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const apiKey = 'df0a5895c0421115d9f352373db3c01f';
    api
      .get(`/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => {
        const moviesFromApi = response.data.results as Movie[];
        console.log(response.data.results);
        setMovies(moviesFromApi);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Title>Movie Database</Title>

      <Form>
        <input placeholder="Type your film" />
        <button type="submit">
          <SearchIcon />
        </button>
      </Form>

      <SearchContent>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          movies.map(movie => (
            <div>
              <Link to="/movie">
                <MovieCard
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterPath={movie.poster_path}
                />
              </Link>
            </div>
          ))
        )}
      </SearchContent>
    </>
  );
};

export default Dashboard;
