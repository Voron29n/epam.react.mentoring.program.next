import { memo } from 'react';
import Image from 'next/image';
import logoImg from 'images/netflixroulette.png';

const LogoComponent = () => (
  <Image className='logo__img' src={logoImg} alt='logo' />
);

export const Logo = memo(LogoComponent);
