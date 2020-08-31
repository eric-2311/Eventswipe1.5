import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import Splash from './splash/Splash';

const App = () => (
    <div>
        <NavBarContainer />
        <Splash />
    </div>
)

export default App;