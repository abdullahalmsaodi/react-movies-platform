import Hero from "./features/discovery/components/Hero.jsx";
import MovieResultsSection from "./features/movies/components/MovieResultsSection.jsx";
import useMovieSearch from "./features/movies/hooks/useMovieSearch.js";
import TrendingMoviesSection from "./features/trending/components/TrendingMoviesSection.jsx";
import useTrendingMovies from "./features/trending/hooks/useTrendingMovies.js";

const App = () => {
  const movieSearch = useMovieSearch();
  const trendingMovies = useTrendingMovies();

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <Hero
            searchTerm={movieSearch.searchTerm}
            onSearchTermChange={movieSearch.setSearchTerm}
          />
          <TrendingMoviesSection {...trendingMovies} />
          <MovieResultsSection {...movieSearch} />
        </header>
      </div>
    </main>
  );
};

export default App;
