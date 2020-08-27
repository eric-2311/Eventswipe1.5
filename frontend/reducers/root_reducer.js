import { combineReducers } from 'redux';

//Importing necessary reducers to construct slices of state
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
    session: sessionReducer, 
    entities: entitiesReducer
})

export default rootReducer;