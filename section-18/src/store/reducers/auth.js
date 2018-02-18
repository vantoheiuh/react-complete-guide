import actionTypes from '../actions/actionTypes';
import updateObject from './utils/utils';

const authStart = (state, action) => {
    return updateObject(state, {
        authStatus: updateObject(state.authStatus, {
            isProcessing: true
        })
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        authStatus: updateObject(state.authStatus, {
            isProcessing: false
        })
    })
}

const authFailure = (state, action) => {
    return updateObject(state, {
        authStatus: {
            isProcessing: false,
            error: true,
            errorMsg: action.error.message
        }
    })
}

export default (state = { }, action) => {

    switch(action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        
        case actionTypes.AUTH_FAILURE:
            return authFailure(state, action);
        
        default:
            return state;
    }
}