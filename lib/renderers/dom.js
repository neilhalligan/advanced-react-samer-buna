import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import StoreApi from 'state-api';

const store = new StoreApi(window.initialData);

ReactDOM.hydrate(
  <App store={store}/>,
  document.getElementById('root')
);
