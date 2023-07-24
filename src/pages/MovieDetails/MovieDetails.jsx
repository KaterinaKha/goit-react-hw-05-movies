import { Suspense, useEffect, useRef, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { getPoster } from 'services/getImage';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async id => {
      try {
        setLoading(true);
        const movieDetailsData = await getMovieDetails(id);
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      <Link to={backLinkLocationRef.current}>GO Back</Link>
      {movieDetails && (
        <Container>
          <img
            className="movie-poster"
            src={getPoster(movieDetails.poster_path)}
            alt={movieDetails.title || movieDetails.name}
          />
          <div>
            <h1>{movieDetails.title || movieDetails.name}</h1>
            <p>Rating: {movieDetails.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <p>
              {movieDetails?.genres?.length > 0 && movieDetails?.genres
                ? movieDetails.genres.map(genre => genre.name).join(', ')
                : 'NO Genres'}
            </p>
          </div>
        </Container>
      )}

      <ul>
        <li>
          <NavLink to="cast">Customers</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Review</NavLink>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
