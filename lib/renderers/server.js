import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from 'components/App';
import config from 'config';
import StoreApi from 'state-api';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const startTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
  const initialData = {...resp.data, startTime};
  const store = new StoreApi(initialData);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store}/>
    ),
    initialData,
  };
};

export default serverRender;
