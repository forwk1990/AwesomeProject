import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './app';

class Entry extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }

}

export default Entry;