import {
    SET_LOADING_IN_RESERVE_APROBADO,
    SET_ERROR_IN_RESERVE_APROBADO,
    SET_SUCCESS_IN_RESERVE_APROBADO,
} from './../actions/reserveAprobadoAction'

export const reserveAprobadoReducer = (state = {}, action) => {

    switch(action.type) {
        case SET_LOADING_IN_RESERVE_APROBADO:
        case SET_ERROR_IN_RESERVE_APROBADO:
        case SET_SUCCESS_IN_RESERVE_APROBADO: {
            const { reserveAprobado } = action.payload
            const newState = { ...state, ...reserveAprobado }
            return newState
        }
        default: {
            return state
        }
    }
    
}