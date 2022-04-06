import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import initializeI18n from './i18n';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

initializeI18n();

/** Prepare redux store */
const store = configureStore(1);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app'),
);
