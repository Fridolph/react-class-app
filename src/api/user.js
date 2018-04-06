import {post, get} from '../utils/request'

const URL = 'http://localhost:3001/api'

// 注册
export const register = userInfo => {
  return post(`${URL}/register`, userInfo)
}

// 登录
// export const login = (userInfo) => {
//   const {username, password} = userInfo
//   return get(`${URL}/register`)
// }