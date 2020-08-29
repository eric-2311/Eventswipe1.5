import React from 'react';

class NavBar extends React.Component {
    //Passing props through constructor
    constructor(props) {
        super(props)
    }

    render() {
        //If a current user is logged in, render the navigation dropdown
        if (this.props.currentUser) {
            return (
                <div>
                    This is the nav bar
                </div>
            )
        //If a user is not logged in, render the button linking to the login/signup page
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