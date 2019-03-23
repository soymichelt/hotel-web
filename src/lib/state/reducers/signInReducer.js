import {
    SET_START_SIGNIN,
    SET_END_SIGNIN,
    SET_ERROR_WHEN_SIGNIN,
    SET_USER_ACCOUNT,
    SET_START_SIGNOUT,
    SET_END_SIGNOUT,
    SET_ERROR_WHEN_SIGNOUT,
}
from './../actions/signInAction'

export const signInReducer = (state = {}, action) => {
    
    switch (action.type) {
        case SET_START_SIGNIN:
        case SET_END_SIGNIN: 
        case SET_ERROR_WHEN_SIGNIN: {

            const { signin } = action.payload;
            const newState = { ...state, ...signin };
            return newState;
        }
        case SET_USER_ACCOUNT: {

            const { userAccount } = action.payload;
            const newState = { ...state, ...userAccount };
            return newState;
        }
        case SET_START_SIGNOUT:
        case SET_END_SIGNOUT:
        case SET_ERROR_WHEN_SIGNOUT: {

            const { signout } = action.payload;
            const newState = { ...state, ...signout };
            return newState;
        }
        default:
            return state;
    }

};