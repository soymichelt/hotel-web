import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers/combine'

const initialState = {
};

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
)

export function storeApp () {
    
    return store

}