import { connect } from 'react-redux';
import LoginForm from './login_form';

//Map State to Props to allow access to data in login form
const mSTP = state => ({
    email: state.session.email
})