import React, { useCallback, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  FetchErrorMessage,
  Header,
  Layout,
  Logo,
  Movie,
  MovieDetail,
  Spinner
} from 'components';
import { fetchGetMovie, MovieQueryTypeActions, useQueryMovie } from 'hooks';
import { ServerMovie, transformMovieMap } from 'hooks/utils';
import { movieListPrefetch } from 'pages/_utils';

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = await movieListPrefetch(context);
  const { movieId } = context.query;

  await queryClient.prefetchQuery({
    queryKey: [MovieQueryTypeActions.GET, movieId],
    queryFn: () => fetchGetMovie(parseInt(movieId as string))
  });

  return {
    props: {
      movieId,
      dehydratedState: dehydrate(queryClient)
    }
  };
};

interface IMovieDetailComponent {
  movieId: number;
}

export const MovieDetailComponent = ({ movieId }: IMovieDetailComponent) => {
  const [movie, setMovie] = useState<Movie>({ id: movieId } as Movie);
  const { isError, isLoading, data } = useQueryMovie({
    movie: movie,
    isConfirmed: true,
    movieTypeAction: MovieQueryTypeActions.GET
  });
  const router = useRouter();

  const handleSearchDetailClick = useCallback(() => {
    delete router.query?.movieId;
    router.push({
      pathname: `/search`,
      query: router.query
    });
  }, [router]);

  useEffect(() => {
    const routerMovieId = parseInt(router.query?.movieId as string);
    if (movie.id !== routerMovieId) {
      setMovie({ id: routerMovieId } as Movie);
    }
  }, [router.query]);

  const movieDetail =
    !!data && (data as ServerMovie).id !== undefined
      ? transformMovieMap<Movie>(data as ServerMovie)
      : null;
  const errorMessage = isError ? <FetchErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content =
    isError || isLoading ? null : (
      <>
        <MovieDetail movieDetail={movieDetail} />
      </>
    );

  return (
    <Header className='movie__detail'>
      <Logo />
      <>
        <div className='search__icon'>
          <IoSearchOutline onClick={handleSearchDetailClick} />
        </div>
        {spinner || errorMessage || content}
      </>
    </Header>
  );
};

const MovieDetailPage = ({ movieId }: IMovieDetailComponent) => (
  <>
    <Head>
      <title>Movie Detail</title>
      <meta
        name='description'
        content=' Clicking on a movie on search results page navigates to a movie page and the movie details are displayed.'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <MovieDetailComponent movieId={movieId} />
    </Layout>
  </>
);

export default MovieDetailPage;
