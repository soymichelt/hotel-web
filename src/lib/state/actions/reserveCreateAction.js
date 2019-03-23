import {
    getReservesQuery,
} from './../../data/reserveData'

/* Action Type's */
export const SET_LOADING_IN_RESERVE_CREATE    =   'SET_LOADING_IN_RESERVE_CREATE'
export const SET_ERROR_IN_RESERVE_CREATE      =   'SET_ERROR_IN_RESERVE_CREATE'
export const SET_SUCCESS_IN_RESERVE_CREATE    =   'SET_SUCCESS_IN_RESERVE_CREATE'

/* Action Creators */
const setLoadingInReserveCreate  = (payload) =>  ({ type: SET_LOADING_IN_RESERVE_CREATE, payload })
const setErrorInReserveCreate    = (payload) =>  ({ type: SET_ERROR_IN_RESERVE_CREATE, payload })
const setSuccessInReserveCreate  = (payload) =>  ({ type: SET_SUCCESS_IN_RESERVE_CREATE, payload })

export const createReserve = (reserve) => {
    return (dispatch) => {
        const query = getReservesQuery()

        dispatch(loading())

        const {
            habitacionId,
            habitacion,
            fechaEntrada,
            fechaSalida,
            nombre,
            telefono,
            address,
            email,
            DNI,
        } = reserve

        query.add({
            habitacionId,
            habitacion,
            fechaEntrada,
            fechaSalida,
            nombre,
            telefono,
            address,
            email,
            DNI,
            estado: 'en espera',
        })
        .then(() => {
            dispatch(success)
        })
        .catch((e) => {
            dispatch(error(e))
        })
    }
}

const loading = () => setLoadingInReserveCreate({
    reserveCreate: {
        state: 0,
    }
})

const success = () => setSuccessInReserveCreate({
    reserveCreate: {
        state: 1,
    },
})

const error = (error) => setErrorInReserveCreate({
    reserveCreate: 2,
})