import React, { memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import { IDropDownItem, MovieView } from 'components';
import { lightboxActions, LightboxActionTypes } from 'context';
import { useLightboxContext } from 'hooks';

export type Movie = {
  id: number;
  title: string;
  genres: Array<string>;
  releaseDate: string;
  voteAverage: number;
  posterPath: string;
  runtime: number;
  overview: string;

  [key: string]: string | number | Array<string>;
};

export enum MovieKey {
  ID = 'id',
  TITLE = 'title',
  DATE = 'releaseDate',
  RATING = 'voteAverage',
  RUNTIME = 'runtime',
  MOVIE_URL = 'posterPath',
  GENRE = 'genres',
  OVERVIEW = 'overview'
}

interface IMovieItemProps {
  movieItem: Movie;
}

const MovieItemMemo = ({ movieItem }: IMovieItemProps) => {
  const router = useRouter();
  const { dispatch } = useLightboxContext();

  const handleClick = useCallback(() => {
    delete router.query?.movieId;
    router.push({
      pathname: `/movie/${movieItem.id}`,
      query: router.query
    });
  }, [movieItem, router]);

  const handleSelectedDropdownItem = useCallback(
    (dropDownItem: IDropDownItem) => {
      if (dropDownItem.value === LightboxActionTypes.EDIT_MOVIE_FORM) {
        dispatch(lightboxActions.editMovie(movieItem));
      } else if (dropDownItem.value === LightboxActionTypes.DELETE_MOVIE) {
        dispatch(lightboxActions.deleteMovie(movieItem));
      }
    },
    [dispatch, movieItem]
  );

  return (
    <MovieView
      movieItem={movieItem}
      handleClick={handleClick}
      handleSelectedDropdownItem={handleSelectedDropdownItem}
    />
  );
};

export const MovieItem = memo(MovieItemMemo);
