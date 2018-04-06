import {
  register as regHandle, 
  login as loginHandle,
  auths
} from '../../../api/user'
import * as Types from './actionTypes'
import {setSS} from '../../../utils/util'

export const register = userInfo => (dispatch) => {
  regHandle(userInfo).then(res => {
    // console.log('开始注册action', res)
    if (res.code === 1) {
      dispatch({
        type: Types.SET_ERROR,
        msg: res.msg
      })
    } else if (res.code === 0) {
      setSS('user', res)
      dispatch({
        type: Types.SET_USER_INFO,
        data: res.data
      })
    }
  })
}

export const login = userInfo => dispatch => {
  loginHandle(userInfo).then(res => {
    if (res.code === 1) {
      dispatch({
        type: Types.SET_ERROR,
        msg: res.msg
      })
    } else if (res.code === 0) {
      setSS('user', res)
      dispatch({
        type: Types.SET_USER_INFO,
        data: res.data
      })
    }
  })
}

export const auth = _ => dispatch => {
  auths().then(res => {
    if (res.username) {
      // 若登录，将登录信息存到sessionStorage
      setSS('user', res)
      dispatch({
        type: Types.SET_USER_INFO,
        data: res.data
      })
    }
  })
}

export const validate = () => dispatch => {
  auths().then(res => {
    console.log('validate', res)
    if (res.data && res.data.username) {
      setSS('user', res)
      dispatch({
        type: Types.SET_USER_INFO,
        userInfo: res.data
      })
    }
  })
}