import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    //Ensuring state isn't accidentally mutated
    Object.freeze(state);

    //Using a switch statement to determine action type
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        default:
            return state;
    }
}

export default usersReducer;