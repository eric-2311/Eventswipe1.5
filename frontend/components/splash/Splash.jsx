import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <div className="splash-welcome-msg">
                    Welcome to Eventswipe!
                </div>
                <div className="splash-img-container">
                    <img src={window.splashURL} className="splash-img"/>
                </div>
            </div>
        )
        
    }
}

export default Splash;