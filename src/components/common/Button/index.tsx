import React, { memo } from 'react';

interface IButtonProps {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  classNames?: Array<string>;
  onClick: (e: any) => void;
}

const ButtonMemo = ({
  text,
  type = 'button',
  classNames,
  onClick
}: IButtonProps) => {
  let classNameAtr = ['common__button'] as Array<string>;
  if (classNames) {
    classNameAtr = [...classNameAtr, ...classNames];
  }
  return (
    <button onClick={onClick} className={classNameAtr.join(' ')} type={type}>
      {text}
    </button>
  );
};

export const Button = memo(ButtonMemo);
