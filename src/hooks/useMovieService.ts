import { useCallback, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { NextRouter } from 'next/router';
import { Movie } from 'components';
import { MovieQueryTypeActions, useQueryMovie } from 'hooks/useQueryMovie';
import { ServerMovie, transformMovieMap } from 'hooks/utils';
import { MovieListActions } from 'store/actionCreators';

interface IUseMovieService {
  defaultMovie: Movie;
  successCallback?: () => void;
  movieAction: (
    movie: Movie,
    router?: NextRouter
  ) => (dispatch: Dispatch<MovieListActions>) => void;
  movieQueryTypeActions: MovieQueryTypeActions;
}

export const useMovieService = ({
  defaultMovie = {} as Movie,
  successCallback = () => {},
  movieAction,
  movieQueryTypeActions
}: IUseMovieService) => {
  const [newMovie, setNewMovie] = useState(defaultMovie);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isError, isLoading, isSuccess, data } = useQueryMovie({
    movie: newMovie,
    isConfirmed,
    movieTypeAction: movieQueryTypeActions
  });

  const handleConfirm = useCallback((movie: Movie) => {
    setNewMovie(movie);
    setIsConfirmed(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      movieAction(
        (data as ServerMovie).id !== undefined
          ? transformMovieMap<Movie>(data as ServerMovie)
          : newMovie
      );
      successCallback();
    }
  }, [isSuccess, data]);

  return { isError, isLoading, isSuccess, isConfirmed, handleConfirm };
};
