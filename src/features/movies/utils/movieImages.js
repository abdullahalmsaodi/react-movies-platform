const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getMoviePosterUrl = (posterPath) =>
  posterPath ? `${TMDB_IMAGE_BASE_URL}${posterPath}` : "/no-movie.png";
