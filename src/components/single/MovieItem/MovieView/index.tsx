import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DropDown, IDropDownItem, Movie } from 'components';
import { useHovering } from 'hooks';
import { MOVIE_ACTION } from 'utils';
import movieAction from 'images/movieAction.svg';

interface IMovieItemProps {
  movieItem: Movie;
  handleClick: () => void;
  handleSelectedDropdownItem: (dropDownItem: IDropDownItem) => void;
}

export const MovieView = ({
  movieItem,
  handleSelectedDropdownItem,
  handleClick
}: IMovieItemProps) => {
  const [isBarOpen, setIsBarOpen] = useState(true);
  const router = useRouter();
  const refContainer = useRef<HTMLDivElement>(null);
  const isHovering = useHovering(refContainer);

  const handleActionClick = () => {
    setIsBarOpen(true);
  };

  const handleSelectedAction = useCallback(
    (dropDownItem: IDropDownItem) => {
      handleSelectedDropdownItem(dropDownItem);
      setIsBarOpen(false);
    },
    [handleSelectedDropdownItem]
  );
  const handleCloseActions = useCallback(() => {
    setIsBarOpen(false);
  }, []);

  useEffect(() => {
    if (!isHovering) {
      setIsBarOpen(false);
    }
  }, [isHovering]);

  const { id, title, genres, releaseDate, posterPath } = movieItem;
  const genreText = genres?.join(', ');
  let containerClassName = '';
  if (router.query?.movieId) {
    containerClassName =
      id === parseInt(router.query.movieId as string)
        ? 'select__item'
        : 'opacity__item';
  }
  return (
    <div
      className={`movie__item__container ${containerClassName}`}
      ref={refContainer}
    >
      <div className='item' onClick={handleClick}>
        <img className='poster' src={posterPath} alt={title} />
        <div className='info'>
          <div>{title}</div>
          <div className='release'>{new Date(releaseDate).getFullYear()}</div>
        </div>
        <div className='genre'>{genreText}</div>
      </div>
      {isHovering &&
        (isBarOpen ? (
          <DropDown
            closeIcon
            onClose={handleCloseActions}
            classNames={['movie__item__drop-down']}
            selectList={MOVIE_ACTION}
            onSelected={handleSelectedAction}
          />
        ) : (
          <Image
            src={movieAction}
            className='actions'
            alt='actions'
            onClick={handleActionClick}
          />
        ))}
    </div>
  );
};
