import {
    SET_LOADING_DATA_IN_PEOPLE_LIST,
    SET_ERROR_IN_PEOPLE_LIST,
    SET_DATA_IN_PEOPLE_LIST,
} from './../actions/peopleAction'

export const peopleReducer = (state = {}, action) => {

    switch(action.type) {

        case SET_LOADING_DATA_IN_PEOPLE_LIST:
        case SET_ERROR_IN_PEOPLE_LIST:
        case SET_DATA_IN_PEOPLE_LIST:
        {
            const { peopleList } = action.payload;
            const newState = { ...state, ...peopleList }
            return newState;
        }
        default: {
            return state;
        }

    }

}