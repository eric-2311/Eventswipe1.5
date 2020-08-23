import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    //Adding store 
    let store;
    //If a user is logged in, set the preloaded state to current user's id
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        }
        //If logged in, configure the store with logged in preloaded state
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        //Else configure store without a preloaded state
        store = configureStore();
    }

    //Component to render to 'root' element, passing the store to the Root component
    ReactDOM.render(<Root store={store}/>, root);
})