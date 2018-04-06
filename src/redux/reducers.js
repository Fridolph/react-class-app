import {combineReducers} from 'redux'
import home from '../containers/Home/redux/reducer'
import user from '../containers/LoginRegister/redux/reducer'

export default combineReducers({
  home,
  user
})
