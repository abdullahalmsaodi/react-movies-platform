const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

const createRequestOptions = (signal) => ({
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${API_KEY}`,
  },
  signal,
});

export const getMovies = async (query, signal) => {
  const endpoint = query
    ? `${API_BASE_URL}/search/movie?${new URLSearchParams({ query })}`
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, createRequestOptions(signal));

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  if (data.response === "false") {
    throw new Error(data.Error || "Failed to fetch movies");
  }

  return data.results || [];
};
