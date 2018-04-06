import React, {Component} from 'react'
import logo from '../../assets/img/me.jpg'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export default class HomeHeader extends Component {
  constructor() {
    super()
    this.state = {
      isShow: false
    }
  }

  changeShow = _ => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  choose = e => {
    const type = e.target.getAttribute('type')
    this.props.chooseLesson(type)
    this.changeShow()
  }

  render() {
    // console.log(this.props.chooseLesson)
    return (
      <div className="header-home">
        <div className="header-menu">
          <img src={logo} alt="logo"/>
          <div className="icon-control" onClick={this.changeShow}>
            {
              this.state.isShow 
                ? (<i className="iconfont icon-close"></i>)
                : (<i className="iconfont icon-liebiao"></i>)
            }
          </div>
        </div>
        <TransitionGroup timeout={1000}>
          {
            this.state.isShow 
              ? (<CSSTransition classNames="fadeIn" timeout={{enter: 500, exit: 300}}>
                  <ul className="menu-list" onClick={this.choose}>
                    <li type="NODE">Node课程培训</li>
                    <li type="HTML">HTML课程培训</li>
                    <li type="MOVIE">视频课程</li>
                    <li type="DOC">文档课件</li>
                  </ul>
                </CSSTransition>)
              : null
          }
        </TransitionGroup>
      </div>
    )
  }
}