import React, {Component} from 'react'

// 可以接受几个参数：
// element 表示滚动元素
// isLoading 表示正在加载
// hasMore 是否有更多信息
// loadMore 方法 获取更多
export default class ScrollList extends Component {
  constructor() {
    super()
    this.state = {
      flag: false
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
  componentWillReceiveProps(nextProps) {
    // 父组件数据更新，会触发子组件的 componentWillReceiveProps 生命周期函数
    // console.log('ScrollList props', this.props)
    
    // 等待接受的属性有element 再绑定事件
    if (nextProps.element && !this.state.flag) {
      // 这样会重复绑定3次
      nextProps.element.addEventListener('scroll', () => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          const {element, hasMore, isLoading, lessonList, loadMore} = this.props
          const {scrollTop, offsetHeight, scrollHeight} = nextProps.element
          console.log(scrollTop, ', ', offsetHeight, ', ', scrollHeight)
          if (scrollTop + offsetHeight + 20 > scrollHeight && hasMore && !isLoading) {
            loadMore()
          }
        }, 100)
      })
      this.setState({
        flag: true
      })
    }
  }
}