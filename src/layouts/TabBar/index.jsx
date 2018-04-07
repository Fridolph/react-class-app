import React, {Component} from 'react'
import { NavLink} from 'react-router-dom'
import './tabbar.scss'

export default class TabBar extends Component {
  render() {
    return (
      <nav className="tab-bar-wrapper">
        <NavLink to={'/'} exact className="tab-item" activeClassName="selected">
          <i className="iconfont icon-xingqiu"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to={'/sort'} className="tab-item" activeClassName="selected">
          <i className="iconfont icon-kechengbiao"></i>
          <span>我的课程</span>
        </NavLink>
        <NavLink to={'/profile'} className="tab-item" activeClassName="selected">
          <i className="iconfont icon-gerenxinxi"></i>
          <span>个人中心</span>
        </NavLink>
      </nav>
    )
  }
}