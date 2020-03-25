import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';
import Button from './containers/Button';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

const ConnectedRoot = connect(
  (state) => ({
    state: state.reducer
  }),
  (dispatch) => ({
    // actions: bindActionCreators(screenActions, dispatch)
  })
)(Button);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(App);
}

