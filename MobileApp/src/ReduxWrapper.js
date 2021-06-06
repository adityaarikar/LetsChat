import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import App from './screens';
import RNBootSplash from 'react-native-bootsplash';

const ReduxWrapper = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxWrapper;
