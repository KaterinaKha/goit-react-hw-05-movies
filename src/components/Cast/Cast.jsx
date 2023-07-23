import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getCastDetails } from 'services/api';
import { getPoster } from 'services/getImage';

const Cast = () => {
  const [movieCast, setMovieCast] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async id => {
      try {
        setLoading(true);
        const movieCastData = await getCastDetails(id);
        setMovieCast(movieCastData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast(movieId);
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
      {movieCast?.length < 1 && <p>No info about castomers</p>}
      {movieCast?.length > 0 && (
        <ul>
          {movieCast?.map(casts => {
            return (
              <li key={casts.cast_id}>
                <img
                  className="cast-poster"
                  src={getPoster(casts.profile_path)}
                  alt={casts.name}
                />
                <h3>{casts.name}</h3>
                <p>{casts.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Cast;
