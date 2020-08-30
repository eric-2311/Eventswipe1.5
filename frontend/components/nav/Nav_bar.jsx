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
                <div className="nav-bar-container">
                    <h1 className="nav-bar-logo">eventswipe</h1>
                </div>
            )
        //If a user is not logged in, render the button linking to the login/signup page
        } else {
            return (
                <div className="nav-bar-container">
                    <h1 className="nav-bar-logo">eventswipe</h1>
                    <h1 className="nav-bar-sign-in">Sign In</h1>
                </div>
            )
        }
    }
}

export default NavBar;