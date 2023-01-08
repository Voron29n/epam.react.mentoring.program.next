import { QueryClient } from '@tanstack/react-query';
import { fetchMovieList } from 'hooks/useQueryMovieList';
import { GENRE_BAR, SORT_BAR } from 'utils';

export async function movieListPrefetch(context: any) {
  const { genre, sortBy, searchQuery } = context.query;
  const activeGenre = !!genre ? genre : GENRE_BAR[0].value;
  const activeSortType = !!sortBy ? sortBy : SORT_BAR.list[0].value;
  const activeSearchQuery = !!searchQuery ? searchQuery : '';
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['movieList', activeGenre, activeSortType, activeSearchQuery],
    queryFn: () =>
      fetchMovieList(
        activeGenre as string,
        activeSortType as string,
        activeSearchQuery
      )
  });
  return queryClient;
}
