import {
    getRoomsQuery,
} from './../../data/roomData'

/* Action Type's */
export const SET_LOADING_IN_ROOM_CREATE    =   'SET_LOADING_IN_ROOM_CREATE'
export const SET_ERROR_IN_ROOM_CREATE      =   'SET_ERROR_IN_ROOM_CREATE'
export const SET_SUCCESS_IN_ROOM_CREATE    =   'SET_SUCCESS_IN_ROOM_CREATE'

/* Action Creators */
const setLoadingInRoomCreate  = (payload) =>  ({ type: SET_LOADING_IN_ROOM_CREATE, payload })
const setErrorInRoomCreate    = (payload) =>  ({ type: SET_ERROR_IN_ROOM_CREATE, payload })
const setSuccessInRoomCreate  = (payload) =>  ({ type: SET_SUCCESS_IN_ROOM_CREATE, payload })

export const createRoom = (room) => {
    return (dispatch) => {
        const query = getRoomsQuery()

        dispatch(loading())

        const {
            carnet,
            DNI,
            inss,
            name,
            address,
            job,
            career,
            isStudent,
            isTeacher,
            isAdministrative,
        } = room

        query.add({
            carnet,
            DNI,
            inss,
            name,
            address,
            job,
            career,
            isStudent,
            isTeacher,
            isAdministrative,
        })
        .then(() => {
            dispatch(success)
        })
        .catch((e) => {
            dispatch(error(e))
        })
    }
}

const loading = () => setLoadingInRoomCreate({
    roomCreate: {
        state: 0,
    }
})

const success = () => setSuccessInRoomCreate({
    roomCreate: {
        state: 1,
    },
})

const error = (error) => setErrorInRoomCreate({
    roomCreate: 2,
})