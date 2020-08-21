import * as SessionApiUtils from '../util/session_api_util';

//Exporting constants as actions
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

//Regular action returning an object with all users
const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

//Thunk action to fetch all users from backend
export const fetchUsers = dispatch => (
    SessionApiUtils.getUsers()
        .then(users => dispatch(receiveUsers(users)))
)

