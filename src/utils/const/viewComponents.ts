import { IDropDownItem } from 'components/single/DropDown/DropDownItem';

export const SEARCH_COMPONENT = {
  name: 'searchQuery',
  headline: 'find you movie',
  placeholder: 'What do you want to watch?',
  button: {
    text: 'search',
    classNames: ['search__button', 'upper__text']
  }
};

export const CONFIRM_COMPONENT = {
  DELETE_ACTION: {
    headline: 'Delete MOVIE',
    confirmText: 'Are you sure you want to delete this movie?'
  }
};

export const GENRE_LIST = [
  'Fantasy',
  'Adventure',
  'Science Fiction',
  'Drama',
  'Romance'
];

export const GENRE_BAR = [
  { label: 'all', value: '' },
  ...GENRE_LIST.map(genreName => ({ label: genreName, value: genreName }))
] as Array<IDropDownItem>;

export const SORT_BAR = {
  dropDownClassName: ['sort__bar__drop-down'],
  labelText: 'sort by',
  list: [
    {
      label: 'No sort',
      value: ''
    },
    {
      label: 'release date',
      value: 'release_date'
    },
    {
      label: 'title',
      value: 'title'
    },
    {
      label: 'rating',
      value: 'vote_average'
    }
  ] as Array<IDropDownItem>
};

export const MOVIE_ACTION = [
  {
    label: 'edit',
    value: 'EDIT_MOVIE_FORM'
  },
  {
    label: 'delete',
    value: 'DELETE_MOVIE'
  }
] as Array<IDropDownItem>;
