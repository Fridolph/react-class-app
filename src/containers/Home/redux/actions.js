import * as Types from './actionTypes'
import {getSliders, getLessons} from '../../../api/home'
// actionCreators 构建action的对象 是一个纯函数
export const setCurrentLesson = type => {
  return {
    type: Types.SET_CURRENT_LESSON,
    currentLesson: type
  }
}

// 如果使用reduxThunk, actionCreator可以返回一个函数
// 在函数中有dispatch参数
export const getSlider = () => dispatch => {
  getSliders().then(sliders => {
    dispatch({
      type: Types.GET_SLIDERS,
      sliders
    })
  })
}

export const getLesson = () => (dispatch, getState) => {
  // 从redux中取出 limit type offset
  let {currentLesson, lessons} = getState().home
  let {hasMore, limit, offset} = lessons
  if (!hasMore) return  // 没数据了就不获取
  dispatch({
    type: Types.SET_LOADING_STATUS
  })
  getLessons(currentLesson, offset, limit).then(lesson => {
    dispatch({
      type: Types.GET_LESSONS,
      ...lessons,
      lessonList: lesson
    })
  })
}