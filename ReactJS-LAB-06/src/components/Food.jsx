import React from 'react';

const Food = ({ position }) => {
  return <div className="food" style={{ gridArea: position }} />;
};

export default Food;
