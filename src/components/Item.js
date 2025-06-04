import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { item } = useParams();

  return (
    <div>
      <p>{item}</p>
    </div>
  );
};

export default Item;