import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <img src={window.splashURL} />
            </div>
        )
        
    }
}

export default Splash;