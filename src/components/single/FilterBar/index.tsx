import React from 'react';
import { GenreBar, SortBar } from 'components';

export const FilterBar = () => (
  <div className='filter__bar'>
    <div className='container'>
      <GenreBar />
      <SortBar />
    </div>
  </div>
);
