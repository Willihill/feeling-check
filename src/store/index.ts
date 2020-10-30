import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducer'

const middlewares = [thunk]

export default createStore(reducers, compose(applyMiddleware(...middlewares)))
