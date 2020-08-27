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
                    This is the nav bar
                </div>
            )
        } else {
            return (
                <div>
                    This is the nav bar
                </div>
            )
        }
    }
}

export default NavBar;