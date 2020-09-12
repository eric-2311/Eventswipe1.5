import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    //Freezing to prevent accidentally modifying state
    Object.freeze(state);

    //Using a switch statement to determine action type
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer