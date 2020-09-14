import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors, validateEmail } from '../../actions/session_actions';

//Map State to Props to allow access to data in login form
const mSTP = state => ({
    email: state.session.email,
    errors: state.errors.session
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    receiveEmail: email => dispatch(validateEmail(email)),
    removeErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(LoginForm);