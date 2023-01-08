import React, { useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import { lightboxActions } from 'context';
import { useLightboxContext } from 'hooks';

enum LightboxSize {
  SMALL = 'small',
  LARGE = 'large'
}

interface ILightboxProps {
  lightboxSize: LightboxSize;
  children?: JSX.Element | JSX.Element[];
}

const Lightbox = ({ lightboxSize, children }: ILightboxProps) => {
  const { dispatch } = useLightboxContext();
  const closeLightbox = useCallback(() => {
    dispatch(lightboxActions.closeLightbox());
  }, [dispatch]);

  return (
    <div className='lightbox__container'>
      <div className={`window ${lightboxSize}`}>
        <div className='content'>{children}</div>
        <IoClose className='close__container' onClick={closeLightbox} />
      </div>
    </div>
  );
};

export { Lightbox, LightboxSize };
export type { ILightboxProps };
