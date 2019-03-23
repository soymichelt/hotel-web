export const SET_START_SIGNIN =  'SET_START_SIGNIN';
export const SET_END_SIGNIN = 'SET_END_SIGNIN';
export const SET_ERROR_WHEN_SIGNIN = 'SET_ERROR_WHEN_SIGNIN';

export const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT';

export const SET_START_SIGNOUT =  'SET_START_SIGNOUT';
export const SET_END_SIGNOUT = 'SET_END_SIGNOUT';
export const SET_ERROR_WHEN_SIGNOUT = 'SET_ERROR_WHEN_SIGNOUT';

const setStartSignin = (payload) => ({ type: SET_START_SIGNIN, payload });
const setEndSignin = (payload) => ({ type: SET_END_SIGNIN, payload });
const setErrorWhenSignin = (payload) => ({ type: SET_ERROR_WHEN_SIGNIN, payload });

const setUserAccount = (payload) => ({ type: SET_USER_ACCOUNT, payload });

const setStartSignout = (payload) => ({ type: SET_START_SIGNOUT, payload });
const setEndSignout = (payload) => ({ type: SET_END_SIGNOUT, payload });
const setErrorWhenSignout = (payload) => ({ type: SET_ERROR_WHEN_SIGNOUT, payload });

export const signinStarted = () => {

    return setStartSignin({
        signin: {
            isLoading: true,
        },
    });

};

export const signinFinalized = () => {

    return setEndSignin({
        signin: {
            isLoading: false,
        },
    });

};

export const signinError = (error) => {

    return setErrorWhenSignin({
        signin: {
            error: error,
        },
    });
    
};

export const authorized = (user) => {

    return setUserAccount({
        userAccount: {
            current: { ...user }
        },
    });

};

export const signoutStarted = () => {

    return setStartSignout({
        auth: {
            signout: { isLoading: true, }
        },
    });

};

export const signoutFinalized = () => {

    return setEndSignout({
        auth: {
            signout: { isLoading: false, }
        },
    });

};

export const signoutError = (error) => {

    return setErrorWhenSignout({
        auth: {
            signout: { error: error, }
        },
    });
    
};