import {takeEvery,put,call} from 'redux-saga/effects';
import API from '../../api'
import Axios from 'axios';
import FormData from 'form-data';
import data from '../../../constants/data';

function getFilename(filename){
    const req = /([\w|\s|-])*\.(?:jpg|gif|png)/g;

    return req.exec(filename)[0]
    
}
function getRequested(param){
    let formData = new FormData();
    console.log("line 8",param)
    formData.append('file',{
        uri : param.replace('file://',''),
        
        name : getFilename(param),
        type : 'image/jpeg'

    });
    // formData.append({'value' : param.replace('file://','')})

    console.log("line 12",formData);
    return Axios({
        method : API.CAMERA.METHOD,
        url    : API.CAMERA.URI,
        baseURL : API.BASE_URL,
        headers :{ 
            'accept': 'application/json',
            'content-type': 'multipart/form-data'
        },
        data : formData
    }).then(result => {return (result)})
    .catch(error=> {return (error.response)})
}
function getInfo(param) {
    return Axios({
        method : API.INFO.METHOD,
        url : API.INFO.URI,
        baseURL : API.BASE_URL,
        headers : {
            'accept': 'application/json',
        },
        data : param
    }).then(result => {return (result)})
    .catch(error => {return (error.response)})
}
function* processRequest(param){
    try {
        console.log("line 20",param.payload)
        const result = yield call(getRequested,param.payload.path)
        console.log("line 38 ",result.data.payload)
        yield put({"type" : "CAMERA/PROCESS_REQUEST_SUCCEEDED",payload : result.data.payload});
        param.payload.callback()
    } catch (error) {
        yield put({"type" : "CAMERA/PROCESS_REQUEST_FAILURE",payload : error});
    }
  
}
function *getDataRequested(param){
    try{
        const result = yield call(getInfo,param.payload);
        yield put({"type" : "IMAGE_INFORMATION/GET_DATA_SUCCEEDED",payload:result});

    }catch (error) {
        yield put ({type: "IMAGE_INFORMATION/GET_DATA_FAILED",payload: error});
    }
}
export default function* cameraSaga(){
    yield takeEvery("CAMERA/PROCESS_REQUEST",processRequest);
    yield takeEvery("IMAGE_INFORMATION/GET_DATA_REQUESTED",getDataRequested);
}
