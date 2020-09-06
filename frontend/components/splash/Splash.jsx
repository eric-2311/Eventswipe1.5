import React from 'react';
import Map from '../map/map_container';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <div className="splash-welcome-banner">
                    Welcome to Eventswipe
                    <div className="splash-welcome-msg">
                        Join the fight for racial equality.
                    </div>
                </div>
                <div className="splash-img-container">
                    <img src={window.splashURL} className="splash-img"/>
                </div>
            </div>
        )
        
    }
}

export default Splash;