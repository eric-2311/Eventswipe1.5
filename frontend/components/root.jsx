import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';

const Root = ({ store }) => (
    //Using Provider to pass store to all components
    <Provider store={store}>
        <App />
    </Provider>
)

export default Root;