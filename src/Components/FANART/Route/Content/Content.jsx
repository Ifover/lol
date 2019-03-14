import React, {Component} from 'react'
import './style';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import api from '@/api/home';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
          mode: 'top',
          qbdata:[],
          hzdata:[],
          cosdata:[]
        }
    }
    componentDidMount (){
        api.requestqbData().then(data => {
            console.log(data.data.msg.data)
            this.setState({
              qbdata: data.data.msg.data
            })
          })
          api.requesthzData().then(data => {
            console.log(data.data.msg.data)
            this.setState({
              hzdata: data.data.msg.data
            })
          })
          api.requestcosData().then(data => {
            console.log(data.data.msg)
            this.setState({
              cosdata: data.data.msg
            })
          }) 
    }
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div className='ctbox'>
                <div className="con">
                    <div className="content">
                        <div className="nav">
                            <div className="card-container">
                                <Tabs type="card">
                                <TabPane tab="全部" key="1">
                                    <div className="ul margin">
                                    {this.state.qbdata.map((item,index) =>{
                                        return (
                                            <li key={ index }>
                                                <a href="#" className="hero"><img src={ item.sCoverUrl + '258'}/></a>
                                                <p> {item.sTitle} </p>
                                                <div className="msgbox">
                                                    <a href="#" className="usermsg">
                                                    <i className="userbox">
                                                        <img src= { item.sUrl }/>
                                                    </i>
                                                    <span>{ item.sNickName }</span>
                                                    </a>
                                                    <a href="#"><span className="iconfont icon-dianzan"></span> {item.iZanCount}</a>
                                                </div>
                                        </li>
                                        )
                                    })}
                                    </div>
                                </TabPane>
                                <TabPane tab="只看COS" key="2">
                                    <div className="ul margin">
                                    {this.state.cosdata.map((item,index) =>{
                                        return (
                                            <li key={ index }>
                                                <a href="#" className="hero"><img src={ item.sCoverUrl+'258'}/></a>
                                                <p> {item.sParam3} </p>
                                                <div className="msgbox">
                                                    <a href="#" className="usermsg">
                                                    <i className="userbox">
                                                        <img src= { item.sUrl }/>
                                                    </i>
                                                    <span>{ item.sNickName }</span>
                                                    </a>
                                                    <a href="#"><span className="iconfont icon-dianzan"></span> {item.iZanCount}</a>
                                                </div>
                                        </li>
                                        )
                                    })}
                                    </div>
                                </TabPane>
                                <TabPane tab="只看画作" key="3">
                                    <div className="ul margin">
                                    {this.state.hzdata.map((item,index) =>{
                                        return (
                                            <li key={ index }>
                                                <a href="#" className="hero"><img src={ item.sCoverUrl+'258'}/></a>
                                                <p> {item.sTitle} </p>
                                                <div className="msgbox">
                                                    <a href="#" className="usermsg">
                                                    <i className="userbox">
                                                        <img src= { item.sUrl }/>
                                                    </i>
                                                    <span>{ item.sNickName }</span>
                                                    </a>
                                                    <a href="#"><span className="iconfont icon-dianzan"></span> {item.iZanCount}</a>
                                                </div>
                                        </li>
                                        )
                                    })}
                                    </div>
                                </TabPane>
                                </Tabs>
                            </div>
                            {/* <div className="rnav">
                                <Tabs>
                                    <TabPane tab="推荐" key="1">
                                        <div className="ul margin">
                                            <li>
                                                <a href="#"><img src="//shp.qpic.cn/cms_pic/1359010018/ea0e0f3c56f665e1c052a6e900962a90/258" alt="" className="hero"/></a>
                                                <p>Love birds</p>
                                                <div className="msgbox">
                                                    <a href="#" className="usermsg">
                                                    <i className="userbox">
                                                        <img src="//thirdqq.qlogo.cn/g?b=sdk&k=OX1ALXqI2WnWpicRoYfjfwQ&s=40&t=1522653399" alt="" className="user"/>
                                                    </i>
                                                    <span>金猪</span>
                                                    </a>
                                                    <a href="#"><span className="iconfont icon-dianzan"></span> 1111</a>
                                                </div>
                                            </li>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="最新" key="2">
                                        <div className="ul margin">
                                            <li>
                                                <a href="#"><img src="//shp.qpic.cn/cms_pic/1359010018/ea0e0f3c56f665e1c052a6e900962a90/258" alt="" className="hero"/></a>
                                                <p>Love birds</p>
                                                <div className="msgbox">
                                                    <a href="#" className="usermsg">
                                                    <i className="userbox">
                                                        <img src="//thirdqq.qlogo.cn/g?b=sdk&k=OX1ALXqI2WnWpicRoYfjfwQ&s=40&t=1522653399" alt="" className="user"/>
                                                    </i>
                                                    <span>金猪</span>
                                                    </a>
                                                    <a href="#"><span className="iconfont icon-dianzan"></span> 1111</a>
                                                </div>
                                            </li>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Content