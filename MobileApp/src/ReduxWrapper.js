import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import App from './screens';

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxWrapper;
