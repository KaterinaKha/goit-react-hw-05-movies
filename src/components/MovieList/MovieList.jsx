import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
            poster_path={movie.poster_path}
          />
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};
