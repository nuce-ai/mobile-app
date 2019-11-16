import {takeEvery,put,call} from 'redux-saga/effects';
import Axios from 'axios';


function* homeRequest(param){
    try {
        put({"type" : "HOME/HOME_REQUEST_SUCCESS",payload : "HOME/HOME_REQUEST_SUCCESS IS ACTIVATE"});
    } catch (error) {
        put({"type" : "HOME/HOME_REQUEST_FAILURE",payload : error});
    }
  
}
export default function* homeSaga(){
    yield takeEvery("HOME/HOME_REQUEST",homeRequest);
}
