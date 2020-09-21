import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            renderPass: false,
            exists: this.props.exists
        };
    }
}