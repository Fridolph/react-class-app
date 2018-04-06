import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
// 组件
// import PrivateRoute from './components/PrivateRoute'
import Home from './containers/Home'
import Login from './containers/LoginRegister/Login'
import Register from './containers/LoginRegister/Register'
import Lesson from './containers/Lesson'
import Profile from './containers/Profile'
import Detail from './containers/Detail'
import TabBar from './layouts/TabBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <TabBar />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/register'} component={Register} />
          <Route path={'/login'} component={Login} />
          <Route path={'/lesson'} component={Lesson}/>
          <Route path={'/profile'} component={Profile} />
          <Route path={'/detail'} component={Detail} />
        </Switch>
      </div>
    )
  }
}