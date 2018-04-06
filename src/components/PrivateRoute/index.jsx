import React, {Component} from 'react'

export default class PrivateRoute extends Component {
  render() {
    const {component: Component, ...rest} = this.props
    console.log(Component, rest)
    return (
      <div>
        PrivateRoute
      </div>
    )
  }
}