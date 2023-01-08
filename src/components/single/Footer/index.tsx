import React, { memo } from 'react';
import { Logo } from 'components';

const FooterComponent = () => (
  <div className='footer__container sticky__position'>
    <Logo />
  </div>
);

export const Footer = memo(FooterComponent);
