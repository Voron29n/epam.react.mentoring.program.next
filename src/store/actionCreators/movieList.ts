import { Dispatch } from 'redux';
import { Movie } from 'components';

export enum MovieListActionTypes {
  ADD_MOVIE = 'ADD_MOVIE',
  DELETE_MOVIE = 'DELETE_MOVIE',
  EDIT_MOVIE = 'EDIT_MOVIE',
  SET_MOVIE_LIST = 'SET_MOVIE_LIST'
}

interface AddMovieAction {
  type: MovieListActionTypes.ADD_MOVIE;
  payload: Movie;
}

interface DeleteMovieAction {
  type: MovieListActionTypes.DELETE_MOVIE;
  payload: number;
}

interface EditMovieAction {
  type: MovieListActionTypes.EDIT_MOVIE;
  payload: Movie;
}

interface SetMovieListAction {
  type: MovieListActionTypes.SET_MOVIE_LIST;
  payload: Array<Movie>;
}

export type MovieListActions =
  | AddMovieAction
  | DeleteMovieAction
  | EditMovieAction
  | SetMovieListAction;

export const addMovie = (newMovie: Movie) => {
  return (dispatch: Dispatch<MovieListActions>) => {
    dispatch({
      type: MovieListActionTypes.ADD_MOVIE,
      payload: newMovie
    });
  };
};

export const editMovie = (editedMovie: Movie) => {
  return (dispatch: Dispatch<MovieListActions>) => {
    dispatch({
      type: MovieListActionTypes.EDIT_MOVIE,
      payload: editedMovie
    });
  };
};

export const deleteMovie = (deletedMovie: Movie) => {
  return (dispatch: Dispatch<MovieListActions>) => {
    dispatch({
      type: MovieListActionTypes.DELETE_MOVIE,
      payload: deletedMovie.id
    });
  };
};

export const saveMovieList = (movieList: Array<Movie>) => {
  return (dispatch: Dispatch<MovieListActions>) => {
    dispatch({
      type: MovieListActionTypes.SET_MOVIE_LIST,
      payload: movieList
    });
  };
};
