import React, {Component} from 'react'

export default class Detail extends Component {
  render() {
    // 默认没有对象，解构会报错
    const {img, lesson, price} = this.props.location.state || {}
    
    return (
      <div>
        <img src={img} alt={lesson} />
        <h4>{lesson}</h4>
        <p>{price}</p>
      </div>
    )
  }

  componentWillMount() {
    const {location, history} = this.props
    if (!location.state) {
      history.push('/')
    }
  }
}