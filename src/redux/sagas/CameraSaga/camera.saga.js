import {takeEvery,put,call} from 'redux-saga/effects';
import Axios from 'axios';


function* processRequest(param){
    try {
        yield put({"type" : "CAMERA/PROCESS_REQUEST_SUCCEEDED",payload : "CAMERA/PROCESS_REQUEST_SUCCEEDED"});
    } catch (error) {
        yield put({"type" : "CAMERA/PROCESS_REQUEST_FAILURE",payload : error});
    }
  
}
export default function* cameraSaga(){
    yield takeEvery("CAMERA/PROCESS_REQUEST",processRequest);
}
