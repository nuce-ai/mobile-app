import {handleActions,createActions} from 'redux-actions';

export const actions = createActions({

    "CAMERA": {
        "PROCESS_REQUEST"           :  [meta => meta, payload => payload],
        "PROCESS_REQUEST_SUCCEEDED" : [meta => meta, payload => payload],
        "PROCESS_REQUEST_FAILURE    "   : [meta => meta, payload => payload]
    },
});
const defaultState = {
    isRequest : false,
    isSuccess : false,
    isFailure : false,
    data : {},

}
const reducers = handleActions({
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