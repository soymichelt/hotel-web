import {
    SET_LOADING_DATA_IN_ROOM_LIST,
    SET_ERROR_IN_ROOM_LIST,
    SET_DATA_IN_ROOM_LIST,
} from './../actions/roomAction'

export const roomReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_ROOM_LIST:
        case SET_ERROR_IN_ROOM_LIST:
        case SET_DATA_IN_ROOM_LIST:
        {
            const { roomList } = action.payload;
            const newState = { ...state, ...roomList }
            return newState;
        }
        default: {
            return state;
        }

    }

}