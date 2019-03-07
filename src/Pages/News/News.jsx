import React, {Component} from 'react';
import './style.scss';
import { Tabs, Pagination, Icon } from 'antd';
// import PropTypes from 'prop-types';
import api from '@/api/news';
import 'antd/dist/antd.css'

const TabPane = Tabs.TabPane;
class News extends Component {
  constructor(props) {
  super(props)
  this.state = {
    mode: 'top',
    zhdata:[],
    ggdata:[],
    ssdata:[],
    gldata:[],
    sqdata:[]
  }
  }
  componentDidMount () {
    // function onChange(pageNumber) {
    //   console.log('Page: ', pageNumber);
    // }
    let obj ={
      page:1,
      num:16,
      target:23
    }
    api.requestzhData(obj).then(data => {
      console.log(data.data.result)
      this.setState({
        zhdata: data.data.result
      })
    })
    api.requestggData().then(data => {
      console.log(data.data.result)
      this.setState({
        ggdata: data.data.result
      })
    })
    api.requestssData().then(data => {
      console.log(data.data.result)
      this.setState({
        ssdata: data.data.result
      })
    })
    api.requestglData().then(data => {
      console.log(data.data.result)
      this.setState({
        gldata: data.data.result
      })
    })
    api.requestsqData().then(data => {
      console.log(data.data.result)
      this.setState({
        sqdata: data.data.result
      })
    })
  }
  render () {
    const { mode } = this.state;
    return (
      <div id="app">
        <div className="header">头部组件</div>
        <div className="box">
          <p className="caution">
            <Icon type="home" />
            <a href="/home">英雄联盟首页</a>
            <span className="jt">></span>
            <span className="here">新闻列表</span>
          </p>
          <div className="newsBox">
            <div className="newsList">
                <Tabs
                  defaultActiveKey="1"
                  tabPosition={mode}
                  // style={{ height: 220 }}
                >
                  <TabPane tab="综合" key="1">
                  <ul>
                    { this.state.zhdata.map((item, index) => (
                      <li className="msg">
                        <span className="leftMsg"> {item.sAuthor }</span>
                        <p className="contentMsg">{ item.sTitle }</p>
                        <span className="dataMsg">{ item.sCreated }</span>
                      </li>
                    ))}
                    </ul>
                  </TabPane>
                  <TabPane tab="公告" key="2">
                    { this.state.ggdata.map((item, index) => (
                      <li className="msg">
                        <span className="leftMsg"> {item.sAuthor }</span>
                        <p className="contentMsg">{ item.sTitle }</p>
                        <span className="dataMsg">{ item.sCreated }</span>
                      </li>
                    ))}
                  </TabPane>
                  <TabPane tab="赛事" key="3">
                    { this.state.ssdata.map((item, index) => (
                      <li className="msg">
                        <span className="leftMsg"> {item.sAuthor }</span>
                        <p className="contentMsg">{ item.sTitle }</p>
                        <span className="dataMsg">{ item.sCreated }</span>
                      </li>
                    ))}
                  </TabPane>
                  <TabPane tab="攻略" key="4">
                    { this.state.gldata.map((item, index) => (
                      <li className="msg">
                        <span className="leftMsg"> {item.sAuthor }</span>
                        <p className="contentMsg">{ item.sTitle }</p>
                        <span className="dataMsg">{ item.sCreated }</span>
                      </li>
                    ))}
                  </TabPane>
                  <TabPane tab="社区" key="5">
                    { this.state.sqdata.map((item, index) => (
                      <li className="msg">
                        <span className="leftMsg"> {item.sAuthor }</span>
                        <p className="contentMsg">{ item.sTitle }</p>
                        <span className="dataMsg">{ item.sCreated }</span>
                      </li>
                    ))}
                  </TabPane>
                </Tabs>
              <div className="pages">
                <Pagination showQuickJumper defaultCurrent={ 1 } total={ 96 } />
              </div>
            </div>
            <div className="twoCode">
              <div className="codeBox">
                <img src="//ossweb-img.qq.com/images/lol/v3/zm-qrcode.jpg" />
                <div className="pBox">
                  <p className="p1">掌上英雄联盟</p>
                  <p className="p2">官方咨询 快速掌握</p>
                  <p className="p3">扫一扫立即下载</p>
                </div>
              </div>
              <div className="codeBox">
                <img src="//ossweb-img.qq.com/images/lol/v3/wb-qrcode.jpg" />
                <div className="pBox">
                  <p className="p1">英雄联盟官方微博</p>
                  <p className="p2">官方服务平台精彩不停 互动有你</p>
                  <p className="p3">扫一扫即可关注</p>
                </div>
              </div>
              <ul className="navigation">
                <li><a href="#"><Icon type="play-circle" theme="twoTone" />视频中心</a></li>
                <li><a href="#"><Icon type="trophy" theme="twoTone" />赛事中心</a></li>
                <li><a href="#"><Icon type="gift" theme="twoTone"/>领取中心</a></li>
                <li><a href="#"><Icon type="rocket" theme="twoTone"/>LOL宇宙</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">底部组件</div>
      </div>
    )
  }
}


export default News