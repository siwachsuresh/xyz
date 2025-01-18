// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}