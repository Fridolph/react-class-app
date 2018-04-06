import React, {Component} from 'react'
import './profile.scss'
import avatar from '../../assets/img/me.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../LoginRegister/redux/actions'

class Profile extends Component {
  render() {
    let username
    if (this.props.user && this.props.user.userInfo) {
      username = this.props.user.userInfo.username
    }
    
    return (
      <div className="page-profile">
        <div className="wrapper">
          <section className="info">
            <img src={avatar} alt="avatar" />
            {
              username 
                ? <span>{username}</span>
                : <Link to={'/login'}>请登录</Link>
            }
            {/* <span>请登录</span> */}
          </section>
          <ul className="info-list">
            <li>
              <i className="iconfont icon-gongsijianjie"></i>
              <p>订单管理</p>
            </li>
            <li>
              <i className="iconfont icon-shoucang"></i>
              <p>我的收藏</p>
            </li>
          </ul>

          <ul className="list">
            <li>
              <div className="item-link">
                <span>余额</span>
                <span className="icon"><i className="iconfont icon-arrow-right"></i></span>
              </div>
            </li>
            <li>
              <div className="item-link">
                <span>优惠券</span>
                <span className="icon"><i className="iconfont icon-arrow-right"></i></span>
              </div>
            </li>
          </ul>

          <ul className="list">
            <li>
              <div className="item-link">
                <span>上课流量免费</span>
                <span className="icon"><i className="iconfont icon-arrow-right"></i></span>
              </div>
            </li>
          </ul>

          <ul className="list">
            <li>
              <div className="item-link">
                <span>反馈建议</span>
                <span className="icon"><i className="iconfont icon-arrow-right"></i></span>
              </div>
            </li>
            <li>
              <div className="item-link">
                <span>设置</span>
                <span className="icon"><i className="iconfont icon-arrow-right"></i></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.auth()
  }
}

export default connect(
  state => ({...state}),
  actions
)(Profile)