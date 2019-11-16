import {combineReducers} from 'redux';
import {nestedCombineReducers} from 'nested-combine-reducers';

import homeReducer from './HomeReducer/home.reducer'
const rootReducer = nestedCombineReducers({
    home : homeReducer,
    
},combineReducers);

export default rootReducer;