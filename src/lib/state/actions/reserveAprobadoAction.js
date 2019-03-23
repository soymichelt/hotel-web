import {
    getReservesQuery,
} from './../../data/reserveData'

/* Action Type's */
export const SET_LOADING_IN_RESERVE_APROBADO    =   'SET_LOADING_IN_RESERVE_APROBADO'
export const SET_ERROR_IN_RESERVE_APROBADO      =   'SET_ERROR_IN_RESERVE_APROBADO'
export const SET_SUCCESS_IN_RESERVE_APROBADO    =   'SET_SUCCESS_IN_RESERVE_APROBADO'

/* Action Creators */
const setLoadingInReserveAprobado  = (payload) =>  ({ type: SET_LOADING_IN_RESERVE_APROBADO, payload })
const setErrorInReserveAprobado    = (payload) =>  ({ type: SET_ERROR_IN_RESERVE_APROBADO, payload })
const setSuccessInReserveAprobado  = (payload) =>  ({ type: SET_SUCCESS_IN_RESERVE_APROBADO, payload })

export const aprobadoReserve = (reserveId) => {
    return (dispatch) => {
        const query = getReservesQuery()

        dispatch(loading())

        query.doc(reserveId).update({
            estado: 'aprobado',
        })
        .then(() => {
            dispatch(success)
        })
        .catch((e) => {
            dispatch(error(e))
        })
    }
}

const loading = () => setLoadingInReserveAprobado({
    reserveAprobado: {
        state: 0,
    }
})

const success = () => setSuccessInReserveAprobado({
    reserveAprobado: {
        state: 1,
    },
})

const error = (error) => setErrorInReserveAprobado({
    reserveAprobado: 2,
})