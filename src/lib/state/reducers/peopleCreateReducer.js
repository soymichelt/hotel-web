import {
    SET_LOADING_IN_PEOPLE_CREATE,
    SET_ERROR_IN_PEOPLE_CREATE,
    SET_SUCCESS_IN_PEOPLE_CREATE,
} from './../actions/peopleCreateAction'

export const peopleCreateReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_LOADING_IN_PEOPLE_CREATE:
        case SET_ERROR_IN_PEOPLE_CREATE:
        case SET_SUCCESS_IN_PEOPLE_CREATE: {
            const { peopleCreate } = action.payload
            const newState = { ...state, ...peopleCreate }
            return newState
        }
        default: {
            return state
        }
    }
    
}