import { ForwardedRef, forwardRef, memo } from 'react';
import { IDropDownItem } from 'components';

interface IGenreItemProps {
  genreBarItem: IDropDownItem;
  isActive: boolean;
  onClick: (genreBarItem: IDropDownItem) => void;
}

// eslint-disable-next-line react/display-name
const GenreBarItemComponent = forwardRef(
  (
    { genreBarItem, isActive, onClick }: IGenreItemProps,
    ref: ForwardedRef<HTMLLIElement>
  ) => (
    <li
      ref={isActive ? ref : null}
      className={`genre__item upper__text ${isActive ? 'genre__active' : ''}`}
      onClick={() => onClick(genreBarItem)}
    >
      {genreBarItem.label}
    </li>
  )
);

export const GenreBarItem = memo(GenreBarItemComponent);
