import React from 'react';
import { FetchErrorMessage, Movie, MovieItem, Spinner } from 'components';

interface IMovieListViewProps {
  movieList: Array<Movie> | undefined;
  isError: boolean;
  isLoading: boolean;
}

export const MovieListView = ({
  movieList,
  isError,
  isLoading
}: IMovieListViewProps) => {
  const classNames = `movie__view ${isLoading ? 'movie__loading' : ''}`;
  const errorMessage = isError ? <FetchErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content =
    isError || isLoading ? null : (
      <>
        <div className='movie__count'>
          <span>{movieList?.length}</span>movies found
        </div>
        <div className='movie__list'>
          {movieList?.map(movieItem => (
            <MovieItem key={movieItem.id} movieItem={movieItem} />
          ))}
        </div>
      </>
    );

  return <div className={classNames}>{spinner || errorMessage || content}</div>;
};
