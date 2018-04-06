import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
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
          <Route exact path={'/'} component={Home}></Route>
          <Route path={'/register'} component={Register}></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/lesson'} component={Lesson}></Route>
          <Route path={'/profile'} component={Profile}></Route>
          <Route path={'/detail'} component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}