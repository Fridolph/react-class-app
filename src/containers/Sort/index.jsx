import React, {Component} from 'react'
import './sort.scss'

export default class Sort extends Component {
  state = {
    text: '',
    data: [
      {
        subTitle: '编程语言',
        labels: [
          { label: 'C' },
          { label: 'C++' },
          { label: 'JAVA' },
          { label: 'PHP' },
          { label: 'C#' },
          { label: 'Javascript' },
          { label: 'Python' },
          { label: 'Swift' },
          { label: '更多' }
        ]
      },
      {
        subTitle: '前端开发',
        labels: [
          { label: 'HTML/CSS' },
          { label: 'JavaScript' },
          { label: 'React' },
          { label: 'Vue' },
          { label: 'Nodejs' },
          { label: 'React Native' }
        ]
      },
      {
        subTitle: '移动开发',
        labels: [
          { label: 'Android' },
          { label: 'IOS' },
          { label: '微信开发' },
          { label: '跨平台APP' },
          { label: '其他' }
        ]
      },
      {
        subTitle: '网络与运维',
        labels: [
          { label: 'Linux运维' },
          { label: 'Python自动化运维' },
          { label: 'DevOps' },
          { label: '信息安全' },
          { label: '其他' }
        ]
      },
      {
        subTitle: '游戏开发',
        labels: [
          { label: 'Unity3D' },
          { label: 'Cocos2D' },
          { label: '游戏服务器开发' },
          { label: 'Html5小游戏' },
          { label: 'VR/AR' },
          { label: '其他' }
        ]
      },
      {
        subTitle: '互联网产品',
        labels: [
          { label: '产品策划' },
          { label: '产品运营' },
          { label: '游戏策划' },
          { label: '游戏运营' },
          { label: '新媒体营销' },
          { label: '网络营销理论' },
          { label: 'SEO' },
          { label: 'SEM' }
        ]
      }
    ]
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const {data} = this.state
    return (
      <div className="page-sort">
        <header className="sort-header">
          <div className="icon-wrapper">
            <i className="icon-kecheng"></i>
          </div>
          <input className="search-input" placeholder="搜索老师、机构、课程" type="text" value={this.state.text} onChange={this.handleChange} />
        </header>
        <div className="sort-container">
          <ul className="sort-tab-bar">
            <li className="tab-item selected">IT·互联网</li>
            <li className="tab-item">设计·创作</li>
            <li className="tab-item">语言·留学</li>
            <li className="tab-item">职业·考证</li>
            <li className="tab-item">兴趣·生活</li>
          </ul>
          <section className="main-con">
            <div className="sub-cat">
              {/* <dl className="cat-list-item">
                <dt>互联网产品</dt>
                <dd>
                  <div className="label-item"><span>我是标签</span></div>
                  <div className="label-item"><span>我是标签</span></div>
                  <div className="label-item"><span>我是标签</span></div>
                  <div className="label-item"><span>我是标签</span></div>
                  <div className="label-item"><span>我是标签</span></div>
                </dd>
              </dl> */}
              {
                data
                  ? data.map((v, i) => (
                    <dl className="cat-list-item">
                      <dt>{v.subTitle}</dt>
                      <dd>
                        {
                          v.labels
                            ? v.labels.map((lb, idx) => (
                              <div className="label-item">
                                <span>{lb.label}</span>
                              </div>
                            ))
                            : <span>暂无内容</span>
                        }
                      </dd>
                    </dl>
                  ))
                  : <div>暂无更多内容</div>
              }              
            </div>
          </section>
        </div>
      </div>
    )
  }
}