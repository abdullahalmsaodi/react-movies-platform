import {
  database,
  databaseId,
  ID,
  Query,
  tableId,
} from "../../../services/appwrite.js";
import { getMoviePosterUrl } from "../../movies/utils/movieImages.js";

export const recordMovieSearch = async (searchTerm, movie) => {
  try {
    const result = await database.listDocuments(databaseId, tableId, [
      Query.equal("searchTerm", searchTerm),
    ]);

    if (result.documents.length > 0) {
      const document = result.documents[0];
      await database.updateDocument(databaseId, tableId, document.$id, {
        count: document.count + 1,
      });
      return;
    }

    await database.createDocument(databaseId, tableId, ID.unique(), {
      searchTerm,
      count: 1,
      movie_id: movie.id,
      poster_url: getMoviePosterUrl(movie.poster_path),
    });
  } catch (error) {
    console.error(`Error recording movie search: ${error}`);
  }
};

export const getTrendingMovies = async () => {
  const result = await database.listDocuments(databaseId, tableId, [
    Query.limit(5),
    Query.orderDesc("count"),
  ]);

  return result.documents;
};
