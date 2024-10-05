import React from 'react';
import useCustomMediaQuery from '../hooks/useCustomMediaQuery';

const MediaComponent = () => {
  const isSmallScreen = useCustomMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isSmallScreen ? (
        <p>The screen is less than 768px wide.</p>
      ) : (
        <p>The screen is larger than 768px wide.</p>
      )}
    </div>
  );
};

export default MediaComponent;
