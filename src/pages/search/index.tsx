import React, { useCallback } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData
} from 'next';
import Head from 'next/head';
import { Button, Header, Layout, Logo, SearchBar } from 'components';
import { lightboxActions } from 'context';
import { useLightboxContext } from 'hooks';
import { fetchMovieList } from 'hooks/useQueryMovieList';
import { movieListPrefetch } from 'pages/_utils';
import { ADD_MOVE_BUTTON, GENRE_BAR, SEARCH_COMPONENT, SORT_BAR } from 'utils';

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = await movieListPrefetch(context);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

interface ISearch {
  searchQuery?: string;
}

export const SearchComponent = ({ searchQuery }: ISearch) => {
  const { dispatch } = useLightboxContext();

  const handleAddMovieClick = useCallback(
    () => dispatch(lightboxActions.addMovie()),
    [dispatch]
  );

  return (
    <Header>
      <Logo />
      <Button onClick={handleAddMovieClick} {...ADD_MOVE_BUTTON} />
      <SearchBar searchQueryParam={searchQuery} {...SEARCH_COMPONENT} />
    </Header>
  );
};

const Search = () => (
  <>
    <Head>
      <title>Search</title>
      <meta
        name='description'
        content='When navigating to "/search" with JavaScript disabled, the search page with popular results is displayed;'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <SearchComponent />
    </Layout>
  </>
);

export default Search;
