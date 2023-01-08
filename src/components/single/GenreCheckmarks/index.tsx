import React, { useCallback, useEffect, useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormHelperText,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

interface IGenreCheckmarks {
  id: string;
  meta: any;
  placeholder: string;
  genreList: Array<string>;
  value: Array<string>;
  onChange: (genres: Array<string>) => void;
}

export const GenreCheckmarks = ({
  onChange,
  id,
  meta,
  placeholder,
  genreList,
  value = []
}: IGenreCheckmarks) => {
  const [genreName, setGenreName] = useState<string[]>(value);

  useEffect(() => {
    setGenreName(value);
  }, [value]);

  const handleChange = useCallback(
    ({ target }: SelectChangeEvent<typeof genreName>) => {
      const newGenreName =
        typeof target.value === 'string'
          ? target.value.split(',')
          : target.value;
      setGenreName(newGenreName);
      onChange(newGenreName);
    },
    [onChange]
  );

  const renderValue = useCallback(
    (selected: Array<string>) => selected.join(', '),
    []
  );

  return (
    <FormControl
      error={Boolean(meta.error)}
      sx={{ margin: 0, width: 'inherit' }}
    >
      <Select
        id={id}
        placeholder={placeholder}
        multiple
        value={genreName}
        onChange={handleChange}
        renderValue={renderValue}
        MenuProps={MenuProps}
      >
        {genreList.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={genreName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
      {meta.error && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
