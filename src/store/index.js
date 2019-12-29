import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import reduxPromise from 'redux-promise';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
export default createStore(reducer,applyMiddleware(reduxPromise,reduxLogger,reduxThunk));