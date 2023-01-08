import React, { memo } from 'react';
import bitmap from 'images/bitmap.png';

const HeaderStyle = {
  backgroundImage: `url(${bitmap.src})`
};

interface IHeaderComponent {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export const HeaderComponent = ({ className, children }: IHeaderComponent) => (
  <header
    style={HeaderStyle}
    className={`header__container sticky__position ${className}`}
  >
    {children}
  </header>
);

export const Header = memo(HeaderComponent);
