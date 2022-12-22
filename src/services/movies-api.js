import axios from 'axios';

const KEY = '427d649d47521953b8ebcbfa8ebabdc8';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getPopularMovies() {
  const request = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );

  const detailedRequest = request.data.results.map(e => {
    return {
      id: e.id,
      movieName: e.original_title,
    };
  });
  return detailedRequest;
}

export async function searchMovies(query) {
  const request = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=true`
  );
  const detailedRequest = request.data.results.map(e => {
    return {
      id: e.id,
      movieName: e.original_title,
    };
  });
  return detailedRequest;
}

export async function getMovieDetails(movieId) {
  const request = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  const detailedRequest = [request.data].map(e => {
    return {
      poster: `https://image.tmdb.org/t/p/w500/${e.poster_path}`,
      tag: e.tagline,
      movieName: e.original_title,
      userScore: e.vote_average,
      overview: e.overview,
      genres: e.genres.map(genre => genre.name),
    };
  });
  return detailedRequest;
}

export async function getMovieCast(movieId) {
  const request = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  const detailedRequest = request.data.cast.map(e => {
    return {
      castId: e.cast_id,
      name: e.original_name,
      character: e.character,
      castMemberPhoto: `https://themoviedb.org/t/p/w500/${e.profile_path}`,
    };
  });
  return detailedRequest;
}

export async function getMoviesReviews(movieId) {
  const request = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
  const detailedRequest = request.data.results.map(e => {
    return {
      reviewId: e.id,
      author: e.author,
      review: e.content,
    };
  });
  return detailedRequest;
}