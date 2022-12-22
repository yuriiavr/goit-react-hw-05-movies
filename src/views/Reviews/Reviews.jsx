import { useState, useEffect } from 'react';
import * as getReviewAPI from 'services/movies-api';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [review, setReview] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getReviewAPI.getMoviesReviews(movieId).then(setReview);
  }, [movieId]);
  return (
    <>
      <hr />
      {!review || review.length === 0 ? (
        <p>
          There are no reviews yet. Become the first, who will write a review!
        </p>
      ) : (
        review.map(el => {
          return (
            <div key={el.reviewId}>
              <h5>{el.author}</h5>
              <p>{el.review}</p>
            </div>
          );
        })
      )}
    </>
  );
}