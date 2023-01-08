import React, { memo } from 'react';
import Image from 'next/image';
import congratulationsIcon from 'images/congratulations.svg';

interface ICongratulationsProps {
  headline: string;
  text: string;
}

const CongratulationsMemo = ({ headline, text }: ICongratulationsProps) => (
  <div className='congratulations__container'>
    <div className='congratulations_icon'>
      <Image src={congratulationsIcon} alt={headline} />
    </div>
    <div className='headline upper__text'>{headline}</div>
    <div className='text'>{text}</div>
  </div>
);

export const Congratulations = memo(CongratulationsMemo);
