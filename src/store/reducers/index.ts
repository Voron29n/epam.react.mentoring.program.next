import { combineReducers } from 'redux';
import { movieListReducer } from './movieList';
import { searchMoviesReducer } from './searchMovies';

export const rootReducer = combineReducers({
  movieList: movieListReducer,
  searchMovies: searchMoviesReducer
});
