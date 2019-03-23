import {
    SET_LOADING_IN_RESERVE_CREATE,
    SET_ERROR_IN_RESERVE_CREATE,
    SET_SUCCESS_IN_RESERVE_CREATE,
} from './../actions/reserveCreateAction'

export const reserveCreateReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_LOADING_IN_RESERVE_CREATE:
        case SET_ERROR_IN_RESERVE_CREATE:
        case SET_SUCCESS_IN_RESERVE_CREATE: {
            const { reserveCreate } = action.payload
            const newState = { ...state, ...reserveCreate }
            return newState
        }
        default: {
            return state
        }
    }
    
}