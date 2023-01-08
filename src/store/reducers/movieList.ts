import { Movie } from 'components';
import { MovieListActions, MovieListActionTypes } from 'store/actionCreators';

type MoviesState = {
  movieList: Array<Movie>;
};

export const defaultState: MoviesState = {
  movieList: []
};

export function editMovie(
  movieList: Array<Movie>,
  changedMovie: Movie
): Array<Movie> {
  return movieList.map(movie =>
    movie.id === changedMovie.id ? changedMovie : movie
  );
}

export function addMovie(
  movieList: Array<Movie>,
  newMovie: Movie
): Array<Movie> {
  return [
    ...movieList,
    {
      ...newMovie,
      id: movieList.length++
    }
  ];
}

export function deleteMovie(
  movieList: Array<Movie>,
  movieId: number
): Array<Movie> {
  return movieList.filter(movie => movie.id !== movieId);
}

export const movieListReducer = (
  state = defaultState,
  action: MovieListActions
): MoviesState => {
  switch (action.type) {
    case MovieListActionTypes.ADD_MOVIE:
      return {
        movieList: addMovie(state.movieList, action.payload)
      };
    case MovieListActionTypes.DELETE_MOVIE:
      return {
        movieList: deleteMovie(state.movieList, action.payload)
      };
    case MovieListActionTypes.EDIT_MOVIE:
      return {
        movieList: editMovie(state.movieList, action.payload)
      };
    case MovieListActionTypes.SET_MOVIE_LIST:
      return {
        movieList: action.payload
      };
    default:
      return state;
  }
};
