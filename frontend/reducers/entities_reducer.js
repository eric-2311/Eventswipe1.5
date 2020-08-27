import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

//Creating entities slice of state
const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer;