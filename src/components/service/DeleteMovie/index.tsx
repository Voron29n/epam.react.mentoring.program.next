import React, { useCallback } from 'react';
import {
  Confirm,
  Congratulations,
  FetchErrorMessage,
  LightboxSize,
  Movie,
  Spinner
} from 'components';
import { lightboxActions } from 'context';
import {
  MovieQueryTypeActions,
  useActions,
  useLightboxContext,
  useMovieService
} from 'hooks';
import { CONFIRM_COMPONENT, CONGRATULATIONS_DELETE_MOVIE } from 'utils';

interface IDeleteMovieProps {
  deletedMovie: Movie;
}

export const DeleteMovie = ({ deletedMovie }: IDeleteMovieProps) => {
  const { deleteMovie } = useActions();
  const { dispatch } = useLightboxContext();
  const { isError, isLoading, isSuccess, isConfirmed, handleConfirm } =
    useMovieService({
      defaultMovie: deletedMovie,
      movieAction: deleteMovie,
      successCallback: async () => {
        dispatch(lightboxActions.changeLightboxSize(LightboxSize.SMALL));
      },
      movieQueryTypeActions: MovieQueryTypeActions.DELETE
    });

  const handleDeleteConfirm = useCallback(() => {
    handleConfirm(deletedMovie);
  }, [deletedMovie, handleConfirm]);

  if (!isConfirmed) {
    return (
      <Confirm
        onClick={handleDeleteConfirm}
        {...CONFIRM_COMPONENT.DELETE_ACTION}
      />
    );
  }

  const error = isError ? <FetchErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const successContent = isSuccess ? (
    <Congratulations {...CONGRATULATIONS_DELETE_MOVIE} />
  ) : null;

  return <>{error || spinner || successContent}</>;
};
