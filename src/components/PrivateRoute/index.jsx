import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getSS} from '../../utils/util'

export default class PrivateRoute extends Component {
  render() {
    const {component: Comp, ...rest} = this.props
    return (
      <Route {...rest} render={props => (
        getSS('user') && getSS('user').data.username
          ? <Comp {...props} />
          : <Redirect to={'/login'} />
      )}>
      </Route>
    )
  }
}