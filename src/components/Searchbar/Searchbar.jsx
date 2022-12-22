import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ handleMoviesSubmit }) {
  const [movie, setMovie] = useState('');

  const handleSearchRequest = evt => {
    setMovie(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (movie.trim('') === '') {
      toast.error('Please enter a search request');
      return;
    }
    handleMoviesSubmit(movie);
    setMovie('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={movie}
        onChange={handleSearchRequest}
      />
      <button type="submit">
        <span>Search</span>
      </button>
      <ToastContainer />
    </form>
  );
}

Searchbar.propTypes = {
  handleMoviesSubmit: PropTypes.func.isRequired,
};