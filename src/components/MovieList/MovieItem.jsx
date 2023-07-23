import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { getPoster } from 'services/getImage';

export const MovieItem = ({ id, title, name, poster_path }) => {
  const location = useLocation();
  const src = getPoster(poster_path);

  return (
    <li className="movie-item" key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img className="movie-poster" src={src} alt={title || name} />
        {title || name}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};
