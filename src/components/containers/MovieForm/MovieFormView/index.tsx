import React, { memo } from 'react';
import { Button } from 'components';
import { FORM_MOVIE_RESET_BUTTON, FORM_MOVIE_SUBMIT_BUTTON } from 'utils';

interface IFormMovieView {
  smallInputs: JSX.Element | JSX.Element[];
  largeInputs: JSX.Element | JSX.Element[];
  headline: string;
  handleReset: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const MovieFormViewComponent = ({
  headline,
  smallInputs,
  largeInputs,
  handleReset,
  handleSubmit
}: IFormMovieView) => {
  return (
    <div className='movie__form__container'>
      <div className='headline upper__text'>{headline}</div>
      <div className='movie__data'>
        {smallInputs && (
          <div className='movie__small__inputs'>{smallInputs}</div>
        )}
        {largeInputs && (
          <div className='movie__large__inputs'>{largeInputs}</div>
        )}
      </div>
      <div className='movie__form__buttons'>
        <Button {...FORM_MOVIE_RESET_BUTTON} onClick={handleReset} />
        <Button {...FORM_MOVIE_SUBMIT_BUTTON} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export const MovieFormView = memo(MovieFormViewComponent);
