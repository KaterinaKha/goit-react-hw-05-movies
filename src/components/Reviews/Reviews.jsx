import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/api';

const Reviews = () => {
  const [movieReview, setMovieReview] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReview = async id => {
      try {
        setLoading(true);
        const movieReviewData = await getReview(id);
        setMovieReview(movieReviewData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReview(movieId);
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

      {movieReview?.length > 0 ? (
        <ul>
          {movieReview.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'No reviews'
      )}
    </>
  );
};
export default Reviews;
