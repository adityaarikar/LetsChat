import {createStore} from 'redux';

const userStateReducer = (state = {login: false}, action) => {
  if (action.type === 'login') {
    return {
      login: true,
    };
  }

  if (action.type === 'logout') {
    return {
      login: false,
    };
  }

  return state;
};

const store = createStore(userStateReducer);

export default store;
