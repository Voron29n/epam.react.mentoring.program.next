import { MovieInputSize } from 'components/single/MovieInput/MovieInputView';
import { MovieKey } from 'components/single/MovieItem';

export interface IMovieFormConst {
  label: string;
  placeholder: string;
  customClasses: Array<string>;
  keyName: MovieKey;
  size: MovieInputSize;
}

export const MOVIE_FORM = [
  {
    label: 'title',
    placeholder: 'Title',
    customClasses: [] as Array<string>,
    keyName: MovieKey.TITLE,
    size: MovieInputSize.SMALL
  },
  {
    label: 'release date',
    placeholder: 'Select Date',
    customClasses: [] as Array<string>,
    keyName: MovieKey.DATE,
    size: MovieInputSize.SMALL
  },
  {
    label: 'movie url',
    placeholder: 'https://',
    customClasses: [] as Array<string>,
    keyName: MovieKey.MOVIE_URL,
    size: MovieInputSize.SMALL
  },
  {
    label: 'rating',
    placeholder: '7.8',
    customClasses: [] as Array<string>,
    keyName: MovieKey.RATING,
    size: MovieInputSize.SMALL
  },
  {
    label: 'genre',
    placeholder: 'Select Genre',
    customClasses: [] as Array<string>,
    keyName: MovieKey.GENRE,
    size: MovieInputSize.SMALL
  },
  {
    label: 'runtime',
    placeholder: 'minutes',
    customClasses: [] as Array<string>,
    keyName: MovieKey.RUNTIME,
    size: MovieInputSize.SMALL
  },
  {
    label: 'overview',
    placeholder: 'Movie description',
    customClasses: ['overview'] as Array<string>,
    keyName: MovieKey.OVERVIEW,
    size: MovieInputSize.LARGE
  }
] as Array<IMovieFormConst>;
