/**
 * Created by itachi on 16/11/9.
 */

import loggerMiddleware from '../middleware/logger.js'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import {createStore,applyMiddleware} from 'redux'


// 扩展createStore
var enhancerCreateStore = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
)(createStore);

const store = enhancerCreateStore(rootReducer);

export default store;





