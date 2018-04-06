import * as Types from './actionTypes'

const initialState = {
  userInfo: {}, // 用户信息
  err: '', // 登录注册的错误信息
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_ERROR:
      return {
        ...state,
        err: action.err
      }
    case Types.SET_USER_INFO:
      return {
        ...state,
        err: '',
        userInfo: action.data
      }
    default:
      return state
  }
}