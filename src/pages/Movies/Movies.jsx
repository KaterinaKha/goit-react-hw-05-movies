import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { getMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movie) return;
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const moviesList = await getMovies(movie);
        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movie]);

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.elements.search.value;

    setSearchParams({ query: searchValue });
    // e.target.elements.search.value = '';
    form.reset();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          name="search"
          type="text"
          required
          placeholder="Search movies..."
        />
        <button type="submit">
          <BiSearchAlt />
          <span>Search</span>
        </button>
      </form>
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
      <MovieList movies={movies} />
    </div>
  );
};
export default Movies;
