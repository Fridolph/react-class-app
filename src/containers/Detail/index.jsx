import React, {Component} from 'react'
import DHeader from './DHeader'
import './detail.scss'

export default class Detail extends Component {
  render() {
    // 默认没有对象，解构会报错
    const {img, lesson, price} = this.props.location.state || {}
    
    return (
      <section className="page-detail">
        <DHeader />
        <article className="img-text-wrapper">
          <img src={img} alt={lesson} />
          <h4>{lesson}</h4>
          <p>{price}</p>
        </article>
        <div className="split"></div>
        <article className="detail info-teacher">
          <h2 className="title">老师介绍</h2>
          <ul className="teacher-list">
            <li className="list-item">
              <article className="item">
                <div className="info-top">
                  <img src="//10.url.cn/eth/ajNVdqHZLLABx3384A9WSC8gITtQhZNXPbamNwJ9EqMrBAHYjq42AibbSYxZkpLMZyJwwbGvWJiak/130" alt="" />
                  <h3>陈思彤</h3>
                  <p>好评数 -</p>
                  <p>课程数 -</p>
                  <p>学生数 -</p>
                </div>
                <div className="list-info">
                  <p>渡一教育高级讲师，现任渡一信息技术开发有限公司CTO，哈尔滨托特教育科技有限公司CTO， 原百度自然语言处理事业群 T6 级高级工程师，精通 Web 全栈、Java和 C++等技术，对设计模式，框架源码有很深的理解！</p>
                </div>
              </article>
            </li>
            <li className="list-item">
              <article className="item">
                <div className="info-top">
                  <img src="//10.url.cn/eth/ajNVdqHZLLDg6PdT3hrruRewd9KBlA2l3Gzn35DH8xsQIYmvBribcYrhGasf3M4LEUTBngLh2M50/130" alt="" />
                  <h3>姬成</h3>
                  <p>好评数 -</p>
                  <p>课程数 -</p>
                  <p>学生数 -</p>
                </div>
                <div className="list-info">
                  <p>现任渡一信息开发有限公司 CEO，原阿里巴巴 UC 移动事业群购物搜索项目负责人，微软 GMCT 金牌讲师，并兼任多所高校企联合生涯规划师，曾累计在各大学开展70余场生涯规划讲座。</p>
                </div>
              </article>
            </li>
          </ul>
        </article>
      </section>
    )
  }

  componentWillMount() {
    const {location, history} = this.props
    if (!location.state) {
      history.push('/')
    }
  }
}