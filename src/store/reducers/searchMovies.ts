import { IDropDownItem } from 'components';
import {
  SearchMoviesActions,
  SearchMoviesActionTypes
} from 'store/actionCreators';

export type SearchMoviesState = {
  searchQuery: string;
  activeGenre: IDropDownItem;
  activeSortType: IDropDownItem;
};

const defaultState: SearchMoviesState = {
  searchQuery: '',
  activeGenre: {} as IDropDownItem,
  activeSortType: {} as IDropDownItem
};

export const searchMoviesReducer = (
  state = defaultState,
  action: SearchMoviesActions
): SearchMoviesState => {
  switch (action.type) {
    case SearchMoviesActionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        searchQuery: action.payload
      };
    case SearchMoviesActionTypes.SET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    case SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload
      };
    default:
      return state;
  }
};
