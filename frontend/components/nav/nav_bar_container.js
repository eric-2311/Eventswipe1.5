import { connect } from 'react-redux';
import NavBar from './Nav_bar';
import { logout } from '../../actions/session_actions';

//Map State to Props to allow for current user to be accessed through NavBar component
const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

//Map Dispatch to Props to allow for logout function from session actions
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

//Using React-Redux connect to connect mSTP and mDTP to NavBar component
export default connect(mSTP, mDTP)(NavBar);
