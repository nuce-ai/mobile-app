import {handleActions,createActions} from 'redux-actions';

export const actions = createActions({

    "CAMERA": {
        "PROCESS_REQUEST"           :  [meta => meta, payload => payload],
        "PROCESS_REQUEST_SUCCEEDED" : [meta => meta, payload => payload],
        "PROCESS_REQUEST_FAILURE    "   : [meta => meta, payload => payload]
    },
    "IMAGE_INFORMATION" : {
        "GET_DATA_REQUESTED" : [meta => meta, payload => payload],
        "GET_DATA_SUCCEEDED" : [meta => meta, payload => payload],
        "GET_DATA_FAILED" : [meta => meta, payload => payload],
    }
});
const defaultState = {
    isRequest : false,
    isSuccess : false,
    isFailure : false,
    data : {},
    image_info:{},

}
const reducers = handleActions({
    [actions.imageInformation.getDataRequested] :(state,action) => {
        return({
            is_request : true,
            is_success : false,
            is_failure : false,
        })
       
    },
    [actions.imageInformation.getDataSucceeded] :(state,action) => {
        return({
            is_request : false,
            is_success : true,
            is_failure : false,
            image_info : action.payload,
        })
       
    },
    [actions.imageInformation.getDataFailed] :(state,action) => {
        return({
            is_request : false,
            is_success : false,
            is_failure : true,
        })
       
    },


    [actions.camera.processRequest] : (state,action) => {
        return({
            ...state,
            isRequest : true,
            isSuccess : false,
            isFailure : false
           
        })
    },
    [actions.camera.processRequestSucceeded] : (state,action) => {
        return({
            ...state,
            isRequest : false,
            isSuccess : true,
            isFailure : false,
            data   : action.payload
        })
    },
    [actions.camera.processRequestFailure] : (state,action) => {
        return({
            ...state,
            isRequest : false,
            isSuccess : false,
            isFailure : true,
            
        })
    },
    
 },
 defaultState
)
export default reducers;