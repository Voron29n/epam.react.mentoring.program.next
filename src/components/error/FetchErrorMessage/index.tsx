import React, { memo } from 'react';

const FetchErrorMessageComponent = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <iframe
      src='https://giphy.com/embed/8L0Pky6C83SzkzU55a'
      frameBorder='0'
      className='giphy-embed'
      allowFullScreen
    />
  </div>
);

export const FetchErrorMessage = memo(FetchErrorMessageComponent);
