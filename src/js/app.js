import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppartmentList } from 'js/modules/Appartment';
import createAppStore from 'js/utils/createAppStore';

const rootEl = document.getElementById('app-root');
const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <AppartmentList />
  </Provider>,
  rootEl,
);
