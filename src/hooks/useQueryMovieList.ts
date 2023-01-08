import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Movie } from 'components';
import {
  fetchReq,
  generateMoviesUrl,
  ServerMovie,
  transformMovieMap
} from 'hooks/utils';

export const fetchMovieList = async (
  activeGenre: string,
  activeSortType: string,
  searchQuery: string
): Promise<Array<Movie>> => {
  const movieListUrl = generateMoviesUrl(
    activeGenre,
    activeSortType,
    searchQuery
  );
  const res = await fetchReq({ url: movieListUrl.toString() });
  const json = await res.json();

  return json.data
    .map((serverMovie: ServerMovie) => transformMovieMap<Movie>(serverMovie))
    .filter((movie: Movie) => !!movie.runtime);
};

export const useQueryMovieList = (
  activeGenre: string,
  activeSortType: string,
  searchQuery: string
): UseQueryResult<Array<Movie>> => {
  return useQuery({
    queryKey: ['movieList', activeGenre, activeSortType, searchQuery],
    queryFn: () => fetchMovieList(activeGenre, activeSortType, searchQuery)
  });
};
