import { createStore } from 'redux';

const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createAppStore = () => {
  const store = createStore(
    reducer,
    initialState,
    global.devToolsExtension ? global.devToolsExtension() : f => f,
  );

  return store;
};

export default createAppStore;
