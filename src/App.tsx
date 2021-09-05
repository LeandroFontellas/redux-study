import React from 'react';
import { Provider } from 'react-redux';
import { Catalog } from './components/Catalog';
import { store } from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <Catalog />
  </Provider>
);

export { App };
