import MovieCard from "./MovieCard.jsx";

const MovieGrid = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </ul>
);

export default MovieGrid;
