import React from 'react';
import Map from '../map/map_container';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <div className="splash-welcome-banner">
                    Welcome to Eventswipe
                    <div className="splash-welcome-msg">
                        <p>Join the fight for racial equality.</p>
                    </div>
                </div>
                <div className="splash-map-container">
                    <Map/>
                </div>
            </div>
        )
        
    }
}

export default Splash;