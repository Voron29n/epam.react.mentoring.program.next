import React from 'react';
import { DehydratedState } from '@tanstack/query-core/src/hydration';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SearchComponent } from 'pages/search/index';
import { Layout } from 'components';
import { movieListPrefetch } from 'pages/_utils';

interface ISearchQuery {
  searchQuery: string;
  dehydratedState: DehydratedState;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = await movieListPrefetch(context);
  const { searchQuery } = context.query;

  return {
    props: {
      searchQuery,
      dehydratedState: dehydrate(queryClient)
    } as ISearchQuery
  };
};

const SearchQuery = ({ searchQuery }: ISearchQuery) => (
  <>
    <Head>
      <title>Search Query</title>
      <meta
        name='description'
        content='When navigating to the search URL with search query and filtering/sorting query parameters, the list of movies matching all search parameters is displayed.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <SearchComponent searchQuery={searchQuery} />
    </Layout>
  </>
);

export default SearchQuery;
