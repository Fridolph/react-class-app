import React, {Component} from 'react'
import logo from '../../assets/img/me.jpg'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './home.scss'

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

  render() {
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
                  <ul className="menu-list">
                  <li type="1">Node课程培训</li>
                  <li type="2">HTML课程培训</li>
                  <li type="3">视频课程</li>
                  <li type="4">文档课件</li>
                </ul>
              </CSSTransition>)
              : null
          }
        </TransitionGroup>
      </div>
    )
  }
}