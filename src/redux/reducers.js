import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import home from '../containers/Home/redux/reducer'
import user from '../containers/LoginRegister/redux/reducer'

export default combineReducers({
  router: routerReducer,
  home,
  user
})
