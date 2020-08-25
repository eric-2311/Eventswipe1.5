import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
    //Using Provider to pass store to all components
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default Root;