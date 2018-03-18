import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'js/utils/rootSaga';
import createRootReducer from './createRootReducer';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const middlewares = [sagaMiddleware];

const createAppStore = () => {
  const store = createStore(
    createRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      global.devToolsExtension ? global.devToolsExtension() : f => f,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createAppStore;
