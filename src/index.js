import ReactDOM from 'react-dom';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import ToDoApp from './containers/ToDoApp';
import { Provider } from "react-redux";
import { persistor, store } from './store/configureStore';

import './style.scss';


const container = document.querySelector('#react-app');
ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ToDoApp />
  </PersistGate>
</Provider>, container);
