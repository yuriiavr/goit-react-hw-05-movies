import { useState, useEffect } from 'react';
import {
  NavLink,
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';
import * as getMovieDetailsAPI from 'services/movies-api';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    getMovieDetailsAPI
      .getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => {
        navigate('/', { replace: true });
        console.error(error);
      });
  }, [movieId, navigate]);
  
  const goBackLink = location?.state?.from ?? `/`;

  return (
    <div>
      <Link to={goBackLink} className={css.goBack_link}>
        &#8592; Go Back
      </Link>
      {movie && (
        <div className={css.movie_thumb}>
          <img src={movie[0].poster} alt={movie[0].tag} className={css.image} />
          <div>
            <h2>{movie[0].movieName}</h2>
            <p>User score: {movie[0].userScore}</p>
            <h3>Overview</h3>
            <p>{movie[0].overview}</p>
            <h3>Genres</h3>
            <p className={css.genres}>{movie[0].genres.join(',  ')}</p>
          </div>
        </div>
      )}
      <hr />
      <h3>More information</h3>
      <div>
        <ul className={css.links}>
          <li>
            <NavLink to="cast" state={{ from: location?.state?.from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: location?.state?.from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}