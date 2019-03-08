import { combineReducers } from 'redux'
import { peopleReducer } from './peopleReducer'
import { peopleCreateReducer } from './peopleCreateReducer'

const root = combineReducers({
    people:     peopleReducer,
    peopleCreate: peopleCreateReducer,
})

export default root