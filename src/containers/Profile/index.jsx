import React, {Component} from 'react'
import './profile.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../LoginRegister/redux/actions'

class Profile extends Component {
  render() {
    const {username} = this.props.user.userInfo
    // console.log('username', username)
    return (
      <div className="page-profile">
        <section className="profile-bg">
          <img src="http://p6pzeyeut.bkt.clouddn.com/image/avatar-gray.jpeg" alt="avatar"/>
          {
            username 
              ? <a className="username">{username}</a>
              : <Link to={'/login'} className="btn-login">登录</Link>
          }
        </section>
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