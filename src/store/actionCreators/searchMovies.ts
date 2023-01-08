import { Dispatch } from 'redux';
import { NextRouter } from 'next/router';
import { IDropDownItem } from 'components';
import { baseApiConfig } from 'utils';

export enum SearchMoviesActionTypes {
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_ACTIVE_GENRE = 'SET_ACTIVE_GENRE',
  SET_ACTIVE_SORT_TYPE = 'SET_ACTIVE_SORT_TYPE'
}

type SetSearchTextAction = {
  type: SearchMoviesActionTypes.SET_SEARCH_TEXT;
  payload: string;
};

type SetActiveGenreAction = {
  type: SearchMoviesActionTypes.SET_ACTIVE_GENRE;
  payload: IDropDownItem;
};

type SetActiveSortTypeAction = {
  type: SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE;
  payload: IDropDownItem;
};

export type SearchMoviesActions =
  | SetSearchTextAction
  | SetActiveGenreAction
  | SetActiveSortTypeAction;

const searchParamsActions = (
  searchName: string,
  activeParam: IDropDownItem,
  router: NextRouter
): void => {
  if (!!activeParam.value) {
    router.query[searchName] = activeParam.value;
  } else {
    delete router.query[searchName];
  }
  router.push(router);
};

export const setSearchText = (searchText: string) => {
  return (dispatch: Dispatch<SearchMoviesActions>) => {
    dispatch({
      type: SearchMoviesActionTypes.SET_SEARCH_TEXT,
      payload: searchText
    });
  };
};

export const setActiveGenre = (
  activeGenre: IDropDownItem,
  router: NextRouter
) => {
  searchParamsActions(baseApiConfig._searchParams.genre, activeGenre, router);

  return (dispatch: Dispatch<SearchMoviesActions>) => {
    dispatch({
      type: SearchMoviesActionTypes.SET_ACTIVE_GENRE,
      payload: activeGenre
    });
  };
};

export const setActiveSortType = (
  activeSortType: IDropDownItem,
  router: NextRouter
) => {
  searchParamsActions(
    baseApiConfig._searchParams.sortBy,
    activeSortType,
    router
  );

  return (dispatch: Dispatch<SearchMoviesActions>) => {
    dispatch({
      type: SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE,
      payload: activeSortType
    });
  };
};
