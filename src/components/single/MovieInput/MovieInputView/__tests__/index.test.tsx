import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MovieInputView } from '../index';
import { movieInputViewData } from './mocks';

describe('MovieInputView component', () => {
  const { label, customClasses, children } = movieInputViewData;
  let movieInputViewRender: RenderResult;

  beforeEach(() => {
    movieInputViewRender = render(
      <MovieInputView label={label} customClasses={customClasses}>
        <div>{children}</div>
      </MovieInputView>
    );
  });

  it('renders', () => {
    const { container } = movieInputViewRender;
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(container.querySelector('.movie__input__container')).toHaveClass(
      ...customClasses
    );
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('MovieInputView snapshot', () => {
    expect(movieInputViewRender).toMatchSnapshot();
  });
});
