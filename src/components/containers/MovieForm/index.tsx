import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Movie, MovieFormView, MovieInput, MovieInputSize } from 'components';
import { MOVIE_FORM } from 'utils';

interface IMovieForm {
  headline: string;
  movie: Movie;
  onSubmit: (movieItem: Movie) => void;
}

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  voteAverage: Yup.number()
    .min(0, 'Less then min value!')
    .max(10, 'More then max value!')
    .required('Required'),
  posterPath: Yup.string().required('Required'),
  runtime: Yup.number().min(0, 'Too low!').required('Required'),
  releaseDate: Yup.string().required('Required'),
  genres: Yup.array().min(1, 'Less then min value!').required('Required'),
  overview: Yup.string().required('Required')
});

export const MovieForm = ({ onSubmit, headline, movie }: IMovieForm) => {
  const filterInputsBySize = (inputSize: MovieInputSize) => {
    return MOVIE_FORM.filter(({ size }) => size === inputSize).map(formItem => (
      <MovieInput key={formItem.keyName} {...formItem} />
    ));
  };

  return (
    <Formik
      initialValues={movie}
      validationSchema={SignupSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ handleSubmit, handleReset }) => (
        <MovieFormView
          smallInputs={filterInputsBySize(MovieInputSize.SMALL)}
          largeInputs={filterInputsBySize(MovieInputSize.LARGE)}
          headline={headline}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
        />
      )}
    </Formik>
  );
};
