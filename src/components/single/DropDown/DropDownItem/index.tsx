import React, { Dispatch, memo } from 'react';

export interface IDropDownItem {
  label: string;
  value: string;
}

interface IDropDownItemProps {
  value: IDropDownItem;
  onClick: Dispatch<object>;
}

const DropDownItemComponent = ({ value, onClick }: IDropDownItemProps) => (
  <li className='drop__down__item upper__text' onClick={() => onClick(value)}>
    {value.label}
  </li>
);

export const DropDownItem = memo(DropDownItemComponent);
