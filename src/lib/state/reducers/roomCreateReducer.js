import {
    SET_LOADING_IN_ROOM_CREATE,
    SET_ERROR_IN_ROOM_CREATE,
    SET_SUCCESS_IN_ROOM_CREATE,
} from './../actions/roomCreateAction'

export const roomCreateReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_LOADING_IN_ROOM_CREATE:
        case SET_ERROR_IN_ROOM_CREATE:
        case SET_SUCCESS_IN_ROOM_CREATE: {
            const { roomCreate } = action.payload
            const newState = { ...state, ...roomCreate }
            return newState
        }
        default: {
            return state
        }
    }
    
}