import { combineReducers } from 'redux';
import programReducers from './program.reducers';

const rootReducer = combineReducers({
    program:programReducers,
});

export default rootReducer;