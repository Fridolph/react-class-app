import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './m-header.scss'

class MHeader extends Component {

  back = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <header className="m-header">
        <i className="iconfont icon-fanhuijiantou" onClick={this.back}></i>
        {this.props.title}
      </header>
    )
  }
}

export default withRouter(MHeader)