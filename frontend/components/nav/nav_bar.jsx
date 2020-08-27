import React from 'react';

class NavBar extends React.Component {
    //Passing props through constructor
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    
                </div>
            )
        }
    }
}