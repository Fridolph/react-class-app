import React, {Component} from 'react'
import HomeHeader from './HomeHeader'
import HomePromotion from './HomePromotion'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from './redux/actions'
import './home.scss'
import Swiper from '../../components/Swiper'
import ScrollList from '../../components/ScrollList'
import {getSS, setSS} from '../../utils/util'

class Home extends Component {
  chooseLesson = type => {
    this.props.setCurrentLesson(type)
    this.props.getLesson()
  }

  loadMore = () => {
    this.props.getLesson()
  }

  render() {
    const {hasMore, isLoading, lessonList} = this.props.home.lessons
    return (
      <div className="page-home">
        {/* 让homeHeader选择的值在home中获取到 */}
        <HomeHeader chooseLesson={this.chooseLesson}/>
        <div className="home-content" ref={scroll => this.scroll = scroll}>
          {/* 首页顶部的轮播图 */}
          <Swiper list={this.props.home.sliders} />
          {/* 课程列表 */}
          <HomePromotion />
          <h2 className="sort-title"><i className="iconfont icon-kechengbiao"></i> 全部课程</h2>
          <ScrollList 
            element={this.scroll}
            isLoading={isLoading}
            hasMore={hasMore}
            lessonList={lessonList}
            loadMore={this.loadMore}
          >
            <div className="lessons-wrapper">
              {
                lessonList.length
                  ? lessonList.map((v, i) => (
                    <Link className="lesson-item" key={i} to={{pathname: `/detail/${v.lesson}`, state: v}}>
                      {/* 跳转详情页，并带上数据 */}
                      <img src={v.img} alt={v.lesson}/>
                      <div className="text">
                        <h5>{v.lesson}</h5>
                        <p>{v.price}</p>
                      </div>
                    </Link>
                  ))
                  : (<div>暂无内容</div>)
              }
            </div>
            <div className="more-wrapper">
              <button className="load-more" onClick={this.loadMore}>获取更多</button>
            </div>
          </ScrollList>
        </div>
      </div>
    )
  }

  componentDidMount() {
    // 判断redux中是否存放了数据， 如果有则不去获取数据
    const {lessonList} = this.props.home.lessons
    if (lessonList.length === 0) {
      this.props.getSlider() // 请求轮播图数据
      this.props.getLesson() // 请求课程数据
    }
    // 让组件强制更新
    if (lessonList.length > 0) {
      // 将记录好的滚动条状态取出来 赋给content元素
      this.scroll.scrollTop = getSS('homeLocation')
      this.forceUpdate()
    }
  }

  componentWillUnmount() {
    // 记住滚动条的位置
    setSS('homeLocation', this.scroll.scrollTop)
  }
}

export default connect(
  state => ({...state}),
  actions
)(Home)