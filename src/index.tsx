import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import { mainReducer } from './MainReducer/mainReducer';
import FoodOrderRootSaga from './FoodOrder/Saga/foodOrderRootSaga';
import App from './App/appContainer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(FoodOrderRootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);