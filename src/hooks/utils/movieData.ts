import { Movie } from 'components';

export interface ServerMovie {
  id: number;
  title: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  poster_path: string;
  runtime: number;
  overview: string;

  [key: string]: string | number | Array<string>;
}

export const isServerMovie = (
  movie: Movie | ServerMovie
): movie is ServerMovie =>
  (movie as ServerMovie).poster_path !== undefined &&
  (movie as ServerMovie) !== undefined;

const commonRestFields = ({
  id,
  title,
  overview,
  runtime,
  genres,
  ...rest
}: Movie | ServerMovie) => ({
  common: { id, title, overview, runtime, genres },
  rest: rest
});

export function transformMovieMap<T extends Movie | ServerMovie>(
  movie: Movie | ServerMovie
): T {
  const { common, rest } = commonRestFields(movie);
  return isServerMovie(movie)
    ? ({
        ...common,
        releaseDate: rest.release_date,
        voteAverage: rest.vote_average,
        posterPath: rest.poster_path
      } as T)
    : ({
        ...common,
        release_date: rest.releaseDate,
        vote_average: rest.voteAverage,
        poster_path: rest.posterPath
      } as T);
}
