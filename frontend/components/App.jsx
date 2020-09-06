import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import Splash from './splash/Splash';
import Map from './map/map_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <main>
            <Splash />
            <Map/>
        </main>
    </div>
)

export default App;