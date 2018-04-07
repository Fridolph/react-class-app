import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class DHeader extends Component {

  back = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <header className="d-header">
        <div className="arrow">
          <i className="iconfont icon-fanhuijiantou" onClick={this.back}></i>
        </div>
        <div className="text">
          用APP学习
          <small>直接离线下载、互动直播、画面更清晰</small>
        </div>
        <div className="btn-row">
          <button className="btn btn-primary">打开</button>
          <button className="btn btn-default">下载</button>
        </div>
      </header>
    )
  }
}

export default withRouter(DHeader)