import * as Types from './actionTypes'

const NODE = 'NODE'
// const HTML = 'HTML'
// const MOVIE = 'MOVIE'
// const DOC = 'DOC'

const initialState = {
  currentLesson: NODE, // 选择课程
  sliders: [], // 轮播图数据
  lessons: { // 滚动到底部刷新
    lessonList: [], // 课程列表
    hasMore: true, // 是否有更多数据
    limit: 5, // 每次取5条
    offset: 0, // 偏移量
    isLoading: false // 表示是否正在加载
  }
}

export default function(state = initialState, action) {
  if (!action) return state
  switch (action.type) {
    case Types.SET_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.currentLesson
      }
    case Types.GET_SLIDERS:
      return {
        ...state,
        sliders: action.sliders
      }
    case Types.GET_LESSONS:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          hasMore: action.hasMore,
          lessonList: [...state.lessons.lessonList, ...action.lessonList],
          offset: state.lessons.offset + action.lessonList.length,
          isLoading: false
        }
      }
    case Types.SET_LOADING_STATUS:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          isLoading: true
        }
      }
    default:
      return state
  }
}