/**
 * Created by itachi on 12/22/16.
 */

import {combineReducers} from 'redux';
import userReducer from './user';

const reduers = combineReducers([
    userReducer
])

export default reduers