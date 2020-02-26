import {takeEvery,put,call} from 'redux-saga/effects';
import API from '../../api'
import Axios from 'axios';
import FormData from 'form-data';

function getRequested(param){
    let formData = new FormData();
    // console.log("line 8",param)
    formData.append('file',{
        uri : param.replace('file://',''),
        name : "what.jpg",
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
    
    
    
    
    // return Axios.post(`${API.BASE_URL}/api/upload`,formData,{
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'multipart/form-data',
    //     }
    // })
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
export default function* cameraSaga(){
    yield takeEvery("CAMERA/PROCESS_REQUEST",processRequest);
}
