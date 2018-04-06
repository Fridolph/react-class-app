import React, {Component} from 'react'
import './profile.scss'
import {Link} from 'react-router-dom'

export default class Profile extends Component {
  render() {
    return (
      <div className="page-profile">
        <section className="profile-bg">
          <img src="http://p6pzeyeut.bkt.clouddn.com/image/avatar-gray.jpeg" alt="avatar"/>
          <Link to={'/login'} className="btn-login">登陆</Link>
        </section>
      </div>
    )
  }
}