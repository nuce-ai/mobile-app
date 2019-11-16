import {all} from 'redux-saga/effects';
import homeSaga from './HomeSaga/home.saga';

function* rootSaga(){
    yield all([
        ...homeSaga(),
    ])
}
export default rootSaga;