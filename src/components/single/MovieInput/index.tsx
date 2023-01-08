import React, { memo, useCallback, useState } from 'react';
import { useFormikContext } from 'formik';
import { Movie, MovieInputView, MovieKey } from 'components';
import { initComponentUtil } from 'components/single/MovieInput/utils';

interface IMovieInput {
  label: string;
  placeholder: string;
  keyName: MovieKey;
  customClasses: Array<string>;
}

const MovieInputMemo = ({
  label,
  placeholder,
  customClasses,
  keyName
}: IMovieInput) => {
  const [isRuntimeFocus, setIsRuntimeFocus] = useState(false);
  const { values, setValues, getFieldMeta, handleChange } =
    useFormikContext<Movie>();

  const handleFocusRuntime: () => void = () => {
    setIsRuntimeFocus(true);
  };
  const handleBlurRuntime: () => void = () => {
    setIsRuntimeFocus(false);
  };
  const handleGenresChange: (genres: string[]) => void = useCallback(
    (genres: string[]) => {
      setValues((oldValue: Movie) => ({ ...oldValue, genres }), true);
    },
    [setValues]
  );

  const inputComponentFunction = initComponentUtil(
    getFieldMeta,
    handleGenresChange,
    handleFocusRuntime,
    handleBlurRuntime,
    handleChange
  );

  const inputComponent = inputComponentFunction(
    keyName,
    placeholder,
    values,
    isRuntimeFocus
  );

  return (
    <>
      <MovieInputView customClasses={customClasses} label={label}>
        {inputComponent}
      </MovieInputView>
    </>
  );
};

export const MovieInput = memo(MovieInputMemo);
