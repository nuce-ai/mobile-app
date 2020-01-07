import {handleActions,createActions} from 'redux-actions';

export const actions = createActions({

    "HOME": {
        "HOME_REQUEST"         : [meta => meta, payload => payload],
        "HOME_REQUEST_SUCCESS" : [meta => meta, payload => payload],
        "HOME_REQUEST_FAILURE" : [meta => meta, payload => payload]
    },
});
const defaultState = {
    isRequest : false,
    isSuccess : false,
    isFailure : false,
}
const reducers = handleActions({
    [actions.home.homeRequest] : (state,action) => {
        return({
            ...state,
            isRequest : true,
            isSuccess : false,
            isFailure : false,
            payload   : action.payload
        })
    },
    [actions.home.homeRequestSuccess] : (state,action) => {
        return({
            ...state,
            isRequest : false,
            isSuccess : true,
            isFailure : false,
            payload   : action.payload
        })
    },
    [actions.home.homeRequestFailure] : (state,action) => {
        return({
            ...state,
            isRequest : false,
            isSuccess : false,
            isFailure : true,
            payload   : action.payload
        })
    },
    
 },
 defaultState
)
export default reducers;