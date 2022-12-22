import { useState, useEffect } from 'react';
import * as searchMoviesAPI from 'services/movies-api';
import { Link, useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import { useSearchParams } from 'react-router-dom';

export default function Movie() {
  const location = useLocation();
  const [moviesGallery, setMoviesGallery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {

    if (!query) {
      return;
    }

    async function fetchMovies() {
      const fetchedMovies = await searchMoviesAPI.searchMovies(query);
      setMoviesGallery(fetchedMovies);
    }

    fetchMovies();
  }, [query]);

  const handleMoviesSubmit = queryMessage => {
    setSearchParams({ query: queryMessage });
  };

  return (
    <>
      <Searchbar handleMoviesSubmit={handleMoviesSubmit} />
      {moviesGallery && (
        <>
          <ul>
            {moviesGallery.map(e => (
              <li key={e.id}>
                <Link to={`/movies/${e.id}`} state={{ from: location }}>
                  {e.movieName}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}