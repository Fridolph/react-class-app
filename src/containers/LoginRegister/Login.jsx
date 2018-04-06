import React, {Component} from 'react'
import './login-register.scss'
import avatar from '../../assets/img/me.jpg'
import {Link} from 'react-router-dom'
import MHeader from '../../layouts/MHeader'
import {connect} from 'react-redux'
import * as actions from './redux/actions'

class Login extends Component {

  handleLogin = e => {
    e.preventDefault()
    let username = this.username.value
    let password = this.password.value
    this.props.login({username, password})
  }

  render() {
    return (
      <div className="page-login-register">
        <MHeader title="登录" />
        
        <form className="form-wrapper" onSubmit={this.handleLogin}>
          <div className="avatar-wrapper">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="form-group">
            <label htmlFor="name">用户</label>
            <input ref={ref => this.username = ref} type="text" name="username" placeholder="用户名"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input ref={ref => this.password = ref} type="password" placeholder="密码" name="password" />
          </div>
          <div className="form-group">
            <input type="submit" value="登录" />
          </div>
          <div className="form-group">
            <Link to={'/register'}>点击注册</Link>
            <p>{this.props.user.msg}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({...state}),
  actions
)(Login)