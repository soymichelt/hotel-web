import {
    SET_LOADING_DATA_IN_RESERVE_LIST,
    SET_ERROR_IN_RESERVE_LIST,
    SET_DATA_IN_RESERVE_LIST,
} from './../actions/reserveAction'

export const reserveReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_RESERVE_LIST:
        case SET_ERROR_IN_RESERVE_LIST:
        case SET_DATA_IN_RESERVE_LIST:
        {
            const { reserveList } = action.payload;
            const newState = { ...state, ...reserveList }
            return newState;
        }
        default: {
            return state;
        }

    }

}