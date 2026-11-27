import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/searchAnalytics.js";

const TRENDING_FETCH_ERROR = "failed to fetch trending movies";

const useTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;

    getTrendingMovies()
      .then((trendingMovies) => {
        if (!isCurrent) return;

        setMovies(trendingMovies);
        setIsLoading(false);
      })
      .catch((requestError) => {
        if (!isCurrent) return;

        console.error(`Error fetching trending movies: ${requestError}`);
        setError(TRENDING_FETCH_ERROR);
        setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return { movies, error, isLoading };
};

export default useTrendingMovies;
