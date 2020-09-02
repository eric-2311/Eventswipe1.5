import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/" className="nav-bar-logo">eventswipe</Link>
                </div>
            )
        //If a user is not logged in, render the button linking to the login/signup page
        } else {
            return (
                <div className="nav-bar-container">
                    <Link to="/" className="nav-bar-logo">eventswipe</Link>
                    <h1 className="nav-bar-sign-in">Sign In</h1>
                </div>
            )
        }
    }
}

export default NavBar;