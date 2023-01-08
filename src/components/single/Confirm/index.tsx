import React, { memo } from 'react';
import { Button } from 'components';
import { CONFIRM_BUTTON } from 'utils';

interface IConfirmFormProps {
  headline: string;
  confirmText: string;
  onClick: () => void;
}

const ConfirmComponent = ({
  headline,
  confirmText,
  onClick
}: IConfirmFormProps) => (
  <div className='confirm__form__container'>
    <div className='headline upper__text'>{headline}</div>
    <div className='confirm__text'>{confirmText}</div>
    <div className='confirm__button__container'>
      <Button onClick={onClick} {...CONFIRM_BUTTON} />
    </div>
  </div>
);

export const Confirm = memo(ConfirmComponent);
