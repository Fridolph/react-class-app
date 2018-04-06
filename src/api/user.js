import {post, get} from '../utils/request'

const URL = 'http://localhost:3001/api'

// 注册
export const register = userInfo => {
  return post(`${URL}/register`, userInfo)
}

// 登录
export const login = userInfo => {
  return post(`${URL}/login`, userInfo)
}

// 验证登录
export const auths = _ => {
  return get(`${URL}/auth`)
}