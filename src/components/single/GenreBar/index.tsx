import React, { memo, useMemo, useRef, useState } from 'react';
import { GenreBarItem } from 'components';
import { useActions, useActiveSearchParams, useTypedSelector } from 'hooks';
import { baseApiConfig, GENRE_BAR } from 'utils';

const GenreBarComponent = () => {
  const [activeLineStyle, setActiveLineStyle] = useState(null);
  const { activeGenre } = useTypedSelector(state => state.searchMovies);
  const { setActiveGenre } = useActions();
  const refItem = useRef<HTMLLIElement>();
  const { handleSelectedActive } = useActiveSearchParams(
    () => {
      if (refItem.current) {
        setActiveLineStyle({
          width: refItem.current.offsetWidth,
          marginLeft: refItem.current.offsetLeft
        });
      }
    },
    baseApiConfig._searchParams.genre,
    GENRE_BAR,
    activeGenre,
    setActiveGenre
  );

  const genreList = useMemo(
    () =>
      GENRE_BAR.slice(0, 5).map(genreBarItem => (
        <GenreBarItem
          ref={refItem}
          key={genreBarItem.value}
          genreBarItem={genreBarItem}
          isActive={genreBarItem.value === activeGenre?.value}
          onClick={handleSelectedActive}
        />
      )),
    [activeGenre?.value, handleSelectedActive]
  );

  return (
    <>
      <ul className='genre__list'>{genreList}</ul>
      <div className='filter__bar__line'>
        <div
          style={activeLineStyle}
          className='filter__bar__active__line'
        ></div>
      </div>
    </>
  );
};

export const GenreBar = memo(GenreBarComponent);
