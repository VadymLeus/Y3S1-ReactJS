import React from 'react';

const Snake = ({ snake }) => {
  return (
    <>
      {snake.map((segment, index) => (
        <div key={index} className="snake" style={{ gridArea: segment }} />
      ))}
    </>
  );
};

export default Snake;

