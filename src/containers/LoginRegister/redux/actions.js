import {register as reg} from '../../../api/user'
import * as Types from './actionTypes'

export const register = userInfo => (dispatch) => {
  reg(userInfo).then(res => {
    if (res.code === 1) {
      dispatch({
        type: Types.SET_ERROR,
        err: res.err
      })
    } else if (res.code === 0) {
      dispatch({
        type: Types.SET_USER_INFO,
        data: res.data
      })
    }
  })
}