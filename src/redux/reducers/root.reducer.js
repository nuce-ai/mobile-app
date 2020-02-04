import {combineReducers} from 'redux';
import {nestedCombineReducers} from 'nested-combine-reducers';

import homeReducer from './HomeReducer/home.reducer'
import cameraReducer from './CameraReducer/camera.reducer'
const rootReducer = nestedCombineReducers({
    home : homeReducer,
    camera : cameraReducer,
    
},combineReducers);

export default rootReducer;