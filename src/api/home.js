import {get} from './index'

// 所有的接口方法都加s  最终我们调用的是getSliders方法
const URL = 'http://localhost:3001/api'
// 获取轮播图
export const getSliders = () => {
  return get(URL + '/sliders')
}

export const getLessons = (type, offset = 5, limit = 5) => {
  return get(`${URL}/lessonlist/${type}/${offset}/${limit}`)
}