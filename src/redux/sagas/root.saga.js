import {all} from 'redux-saga/effects';
import homeSaga from './HomeSaga/home.saga';
import cameraSaga from './CameraSaga/camera.saga';
function* rootSaga(){
    yield all([
        ...homeSaga(),
        ...cameraSaga(),
    ])
}
export default rootSaga;