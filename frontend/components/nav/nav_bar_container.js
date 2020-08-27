import { connect } from 'react-redux';
import NavBar from './Nav_bar';
import { logout } from '../../actions/session_actions';

//Map State to Props to allow for current user to accessed through NavBar component
const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

//Map Dispatch to Props to allow for logout function from session actions
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);
