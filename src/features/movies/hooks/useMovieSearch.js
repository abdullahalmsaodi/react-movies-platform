import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { getMovies } from "../api/tmdb.js";
import { recordMovieSearch } from "../../trending/api/searchAnalytics.js";

const MOVIE_FETCH_ERROR = "Error fetching movies, Please try again";

const useMovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useDebounce(
    () => setDebouncedSearchTerm(searchTerm),
    500,
    [searchTerm],
  );

  useEffect(() => {
    const controller = new AbortController();

    Promise.resolve().then(() => {
      setIsLoading(true);
      setError("");
    });

    getMovies(debouncedSearchTerm, controller.signal)
      .then((movieResults) => {
        if (controller.signal.aborted) return;

        setMovies(movieResults);
        setIsLoading(false);

        if (debouncedSearchTerm && movieResults.length > 0) {
          void recordMovieSearch(debouncedSearchTerm, movieResults[0]);
        }
      })
      .catch((requestError) => {
        if (controller.signal.aborted) return;

        console.error(`Error fetching movies: ${requestError}`);
        setMovies([]);
        setError(MOVIE_FETCH_ERROR);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [debouncedSearchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    movies,
    error,
    isLoading,
  };
};

export default useMovieSearch;
