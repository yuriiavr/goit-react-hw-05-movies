import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails'));
const NotFoundPage = lazy(() => import('../views/NotFoundPage'));
const Cast = lazy(() => import('../views/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Appbar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};