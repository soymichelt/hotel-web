import { combineReducers } from 'redux'
import { roomReducer } from './roomReducer'
import { roomCreateReducer } from './roomCreateReducer'
import { signInReducer } from './signInReducer'
import { reserveCreateReducer } from './reserveCreateReducer'
import { reserveReducer } from './reserveReducer'

const root = combineReducers({
    room:     roomReducer,
    roomCreate: roomCreateReducer,
    signIn: signInReducer,
    reserveCreate: reserveCreateReducer,
    reserve: reserveReducer,
})

export default root