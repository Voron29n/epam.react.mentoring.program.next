import React, { memo } from 'react';

export enum MovieInputSize {
  SMALL = 'small__input',
  LARGE = 'large__input'
}

interface IMovieInputView {
  label: string;
  customClasses: Array<string>;
  children?: JSX.Element | JSX.Element[];
}

const MovieInputViewComponent = ({
  customClasses,
  label,
  children
}: IMovieInputView) => {
  return (
    <>
      <div className={`movie__input__container ${customClasses.join(' ')}`}>
        <div className='label upper__text'>{label}</div>
        {children}
      </div>
    </>
  );
};
export const MovieInputView = memo(MovieInputViewComponent);
