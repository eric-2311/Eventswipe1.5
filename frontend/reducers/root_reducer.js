import { combineReducers } from 'redux';

//Importing necessary reducers to construct slices of state
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
    session: sessionReducer
})

export default rootReducer;