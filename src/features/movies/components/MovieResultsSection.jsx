import Spinner from "../../../components/ui/Spinner.jsx";
import MovieGrid from "./MovieGrid.jsx";

const MovieResultsSection = ({ movies, error, isLoading }) => {
  return (
    <section className="all-movies">
      <h2>All movies</h2>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500"> {error}</p>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </section>
  );
};

export default MovieResultsSection;
