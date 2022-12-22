import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as homePageAPI from 'services/movies-api';
import PageHeading from 'components/PageHeading';

export default function Home() {
  const [movies, setMovies] = useState();
  const location = useLocation();

  useEffect(() => {
    homePageAPI.getPopularMovies().then(setMovies);
  }, []);

  return (
    <>
      <hr />
      <PageHeading text={'Trending Movies'} />
      {movies && (
        <>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{ pathname: `/movies/${movie.id}` }}
                  state={{ from: location.pathname }}
                >
                  {movie.movieName}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}