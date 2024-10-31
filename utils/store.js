
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import jobReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(jobReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
