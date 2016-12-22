/**
 * Created by itachi on 12/22/16.
 */

import {USER} from '../constant'
import createReducer from '../utils/create-reducer';

const initialState = {
    id:'',
    imageUrl:'',
    nickname:''
}

const reducerHandles = {
    [USER.All]: (state,action) => {
        return action;
    }
}

export default createReducer(initialState,reducerHandles);


