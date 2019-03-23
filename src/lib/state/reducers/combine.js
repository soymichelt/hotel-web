import { combineReducers } from 'redux'
import { roomReducer } from './roomReducer'
import { roomCreateReducer } from './roomCreateReducer'
import { signInReducer } from './signInReducer'
import { reserveCreateReducer } from './reserveCreateReducer'
import { reserveReducer } from './reserveReducer'
import { reserveAprobadoReducer } from './reserveAprobadoReducer'

const root = combineReducers({
    room:     roomReducer,
    roomCreate: roomCreateReducer,
    signIn: signInReducer,
    reserveCreate: reserveCreateReducer,
    reserve: reserveReducer,
    reserveAprobado: reserveAprobadoReducer,
})

export default root