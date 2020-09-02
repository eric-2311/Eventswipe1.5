import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <div className="splash-img-container">
                    <img src={window.splashURL} />
                </div>
            </div>
        )
        
    }
}

export default Splash;