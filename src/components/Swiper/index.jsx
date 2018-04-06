import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'
import './swiper.scss'

export default class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    const {list} = this.props
    const opts = {
      continuous: true,
      callback: i => this.setState({ index: i })
    }

    return (
      <div className="swiper-wrapper">
        {
          list.length > 0
            ? <ReactSwipe className="carousel" swipeOptions={opts}>
              {list.map((v, i) => (
                <div className="swiper-box-item" key={i}>
                  <img src={v.img} alt={v.title} />
                </div>
              ))}
            </ReactSwipe>
            : <div>正在加载</div>
        }
        {
          list.length > 0
            ? <div className="dots-wrapper">
              {list.map((v, i) => (<span key={i} className={i === this.state.index ? 'active' : ''}></span>))}
            </div>
            : null
        }
      </div>
    )
  }

  componentDidMount() {
  }
}