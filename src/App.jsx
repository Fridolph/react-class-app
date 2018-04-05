import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Lesson from './containers/Lesson'
import Profile from './containers/Profile'
import TabBar from './layouts/TabBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <TabBar />
        <Switch>
          <Route exact path={'/'} component={Home}></Route>
          <Route path={'/lesson'} component={Lesson}></Route>
          <Route path={'/profile'} component={Profile}></Route>
        </Switch>
      </div>
    )
  }
}