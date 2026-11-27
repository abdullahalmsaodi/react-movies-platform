import Spinner from "../../../components/ui/Spinner.jsx";

const TrendingMoviesSection = ({ movies, error, isLoading }) => {
  return (
    <section className="trending">
      <h2>Trending Movies</h2>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500"> {error}</p>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={movie.$id || movie.movie_id}>
              <p>{index + 1}</p>
              <img src={movie.poster_url} alt={movie.title} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TrendingMoviesSection;
