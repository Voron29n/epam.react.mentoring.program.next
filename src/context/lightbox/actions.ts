import { LightboxSize, Movie } from 'components';

export enum LightboxActionTypes {
  ADD_MOVIE_FORM = 'ADD_MOVIE_FORM',
  EDIT_MOVIE_FORM = 'EDIT_MOVIE_FORM',
  DELETE_MOVIE = 'DELETE_MOVIE',
  CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX',
  CHANGE_LIGHTBOX_SIZE = 'CHANGE_LIGHTBOX_SIZE'
}

export type LightboxMovieAction = {
  type: LightboxActionTypes;
  payload?: {
    movie?: Movie;
    lightboxSize?: LightboxSize;
  };
};

const createAction = ({ type, payload }: LightboxMovieAction) => ({
  type,
  payload
});

const deleteMovie = (movie: Movie) =>
  createAction({
    type: LightboxActionTypes.DELETE_MOVIE,
    payload: {
      movie
    }
  });

const addMovie = () =>
  createAction({ type: LightboxActionTypes.ADD_MOVIE_FORM });

const editMovie = (movie: Movie) =>
  createAction({
    type: LightboxActionTypes.EDIT_MOVIE_FORM,
    payload: { movie }
  });

const closeLightbox = () =>
  createAction({
    type: LightboxActionTypes.CLOSE_LIGHTBOX
  });

const changeLightboxSize = (lightboxSize: LightboxSize) =>
  createAction({
    type: LightboxActionTypes.CHANGE_LIGHTBOX_SIZE,
    payload: { lightboxSize }
  });

export const actions = {
  deleteMovie,
  addMovie,
  editMovie,
  closeLightbox,
  changeLightboxSize
};
