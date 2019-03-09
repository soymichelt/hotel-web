import { combineReducers } from 'redux'
import { roomReducer } from './roomReducer'
import { roomCreateReducer } from './roomCreateReducer'

const root = combineReducers({
    room:     roomReducer,
    roomCreate: roomCreateReducer,
})

export default root