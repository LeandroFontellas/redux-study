import React from 'react';
import { useStore } from 'react-redux';

const Catalog: React.FC = () => {
  const store = useStore();
  console.log(store);
  return <h1>Hello world</h1>;
};

export { Catalog };
