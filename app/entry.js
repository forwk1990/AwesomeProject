import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './app.js';


const Entry = () => {
    <Provider store={store}>
        <App/>
    </Provider>
}

export default Entry;