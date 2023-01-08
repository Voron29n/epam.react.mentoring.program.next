import {
  addMovie,
  deleteMovie,
  editMovie,
  MovieListActions,
  MovieListActionTypes,
  saveMovieList
} from './movieList';
import {
  SearchMoviesActions,
  SearchMoviesActionTypes,
  setActiveGenre,
  setActiveSortType,
  setSearchText
} from './searchMovies';

export { SearchMoviesActionTypes, MovieListActionTypes };
export type { SearchMoviesActions, MovieListActions };

export const MoviesActionCreators = {
  setActiveGenre,
  setActiveSortType,
  setSearchText,
  saveMovieList,
  editMovie,
  deleteMovie,
  addMovie
};
