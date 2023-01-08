import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'components';
import { useActions, useTypedSelector } from 'hooks';

interface ISearchBarProps {
  headline: string;
  placeholder: string;
  searchQueryParam?: string;
  button: {
    text: string;
    classNames: Array<string>;
  };
}

export const SearchBar = ({
  headline,
  button,
  placeholder,
  searchQueryParam = ''
}: ISearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { searchQuery: searchQueryStore } = useTypedSelector(
    store => store.searchMovies
  );
  const { setSearchText } = useActions();
  const router = useRouter();

  useEffect(() => {
    setSearchQuery(searchQueryParam);
    setSearchText(searchQueryParam);
  }, []);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = target;
    if (searchQuery !== inputValue) {
      setSearchQuery(inputValue);
    }
  };

  const submitSearch = useCallback(
    (event: any): void => {
      if (
        ((event.type === 'keydown' && event.key === 'Enter') ||
          event.type === 'click') &&
        searchQueryStore !== searchQuery
      ) {
        setSearchText(searchQuery);
        delete router.query?.searchQuery;
        router.push(
          {
            pathname: `/search/${searchQuery}`,
            query: router.query
          },
          undefined,
          { shallow: true }
        );
      }
    },
    [router, searchQuery, searchQueryStore, setSearchText]
  );

  return (
    <div className='search__container'>
      <div className='headline upper__text'>{headline}</div>
      <input
        type='text'
        className='input'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={submitSearch}
      />
      <Button
        text={button.text}
        classNames={button.classNames}
        onClick={submitSearch}
      />
    </div>
  );
};
