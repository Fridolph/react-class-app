import React, {Component} from 'react'
import HomeHeader from './HomeHeader'
import {connect} from 'react-redux'
import * as actions from './redux/actions'
import './home.scss'
import Swiper from '../../components/Swiper'
import ScrollList from '../../components/ScrollList'

class Home extends Component {
  chooseLesson = type => {
    this.props.setCurrentLesson(type)
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
                    <article className="lesson-item" key={i}>
                      <img src={v.img} alt={v.title}/>
                      <div className="text">
                        <h5>{v.lesson}</h5>
                        <p>{v.price}</p>
                      </div>
                    </article>
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
    this.props.getSlider() // 请求轮播图数据
    this.props.getLesson() // 请求课程数据
  }
}

export default connect(
  state => ({...state}),
  actions
)(Home)