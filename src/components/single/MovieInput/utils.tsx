import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import { FieldMetaProps } from 'formik/dist/types';
import { GenreCheckmarks, MovieKey } from 'components';
import { GENRE_LIST, mapRuntimeToString } from 'utils';

export const initComponentUtil =
  (
    getFieldMeta: <Value>(name: string) => FieldMetaProps<Value>,
    handleGenresChange: (genres: string[]) => void,
    handleFocusRuntime: () => void,
    handleBlurRuntime: () => void,
    handleChange: (e: React.ChangeEvent<any>) => void
  ) =>
  // eslint-disable-next-line react/display-name
  (
    keyName: MovieKey,
    placeholder: string,
    values: FormikValues,
    isRuntimeFocus: boolean
  ) => {
    const meta = getFieldMeta(keyName);
    const commonProps = {
      name: keyName,
      id: keyName,
      placeholder
    };

    switch (keyName) {
      case MovieKey.GENRE:
        if (!Array.isArray(values[keyName])) {
          return null;
        }
        return (
          <GenreCheckmarks
            meta={meta}
            value={values.genres}
            onChange={handleGenresChange}
            genreList={GENRE_LIST}
            {...commonProps}
          />
        );
      case MovieKey.RUNTIME:
        return (
          <TextField
            onFocus={handleFocusRuntime}
            onBlur={handleBlurRuntime}
            onChange={handleChange}
            error={Boolean(meta.error)}
            helperText={meta.error}
            value={
              isRuntimeFocus
                ? values[keyName]
                : mapRuntimeToString(values[keyName])
            }
            type={isRuntimeFocus ? 'number' : 'text'}
            InputProps={
              isRuntimeFocus
                ? {
                    endAdornment: (
                      <InputAdornment position='start'>min</InputAdornment>
                    )
                  }
                : null
            }
            {...commonProps}
          />
        );
      default:
        const type =
          keyName === MovieKey.DATE
            ? 'date'
            : keyName === MovieKey.RATING
            ? 'number'
            : 'text';

        return (
          <TextField
            multiline={keyName === MovieKey.OVERVIEW}
            rows={keyName === MovieKey.OVERVIEW ? 7 : 1}
            type={type}
            onChange={handleChange}
            error={Boolean(meta.error)}
            helperText={meta.error}
            value={values[keyName]}
            {...commonProps}
          />
        );
    }
  };
