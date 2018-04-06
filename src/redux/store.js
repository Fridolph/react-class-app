import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

const history = createHistory()

export function configureStore(initState) {
  return createStore(
    rootReducer, 
    compose(
      applyMiddleware(
        reduxThunk, 
        routerMiddleware(history)
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}