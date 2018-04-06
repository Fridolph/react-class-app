import * as Types from './actionTypes'

const initialState = {
  userInfo: {}, // 用户信息
  msg: '', // 登录注册的错误信息
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_ERROR:
      return {
        ...state,
        msg: action.msg
      }
    case Types.SET_USER_INFO:
      return {
        ...state,
        msg: '',
        userInfo: action.data
      }
    default:
      return state
  }
}