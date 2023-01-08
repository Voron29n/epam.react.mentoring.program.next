import { UseQueryResult } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Movie, MovieListView } from 'components';
import { useQueryMovieList } from 'hooks';
import { GENRE_BAR, SORT_BAR } from 'utils';

export const MovieList = () => {
  const router = useRouter();
  const { searchQuery, genre, sortBy } = router.query;
  const activeGenre = !!genre ? genre : GENRE_BAR[0].value;
  const activeSortType = !!sortBy ? sortBy : SORT_BAR.list[0].value;
  const searchQueryParam = !!searchQuery ? searchQuery : '';

  const {
    isError,
    isLoading,
    data: queryMovieList
  }: UseQueryResult<Array<Movie>> = useQueryMovieList(
    activeGenre as string,
    activeSortType as string,
    searchQueryParam as string
  );

  return (
    <MovieListView
      movieList={queryMovieList}
      isError={isError}
      isLoading={isLoading}
    />
  );
};
