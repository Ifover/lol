import React, {Component} from 'react'
import './style';
import {Tabs} from 'antd';
import {Divider} from 'antd';
import 'antd/dist/antd.css';
import api from '@/api/home';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'top',
            weekdata: [],
            monthdata: []
        }
    }

    componentDidMount() {
        api.requestweekData().then(data => {
            console.log(data.data.msg)
            this.setState({
                weekdata: data.data.msg
            })
        })
        api.requestmonthData().then(data => {
            console.log(data.data.msg)
            this.setState({
                monthdata: data.data.msg
            })
        })
    }

    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div className='rankbox'>
                <div className="rkcontent">
                    <p className="date">
                        <Divider>时间：2019.02.06 - 2019.03.08</Divider>
                    </p>
                    <div className="rknav">
                        <Tabs>
                            <TabPane tab="周榜" key="1">
                                <ul className="rankbox">
                                    {this.state.weekdata.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="imgbox">
                                                    <a href="#"><img src={item.sCoverUrl + '258'}/></a>
                                                </div>
                                                <p>{item.sTitle}</p>
                                                <div className="umsg">
                                                    <a href="#" className="leftmsg">
                                                        <div className="image">
                                                            <img src={item.sUrl}/>
                                                        </div>
                                                        <span>{item.sNickName}</span>
                                                    </a>
                                                    <div className="rightmsg">
                                                        <span className="iconfont icon-dianzan"></span>
                                                        <i>{item.iZanCount}</i>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </TabPane>
                            <TabPane tab="月榜" key="2">
                                <ul className="rankbox">
                                    {this.state.monthdata.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="imgbox">
                                                    <a href="#"><img src={item.sCoverUrl+'258'}/></a>
                                                </div>
                                                <p>{item.sTitle}</p>
                                                <div className="umsg">
                                                    <a href="#" className="leftmsg">
                                                        <div className="image">
                                                            <img src={item.sUrl}/>
                                                        </div>
                                                        <span>{item.sNickName}</span>
                                                    </a>
                                                    <div className="rightmsg">
                                                        <span className="iconfont icon-dianzan"></span>
                                                        <i>{item.iZanCount}</i>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }

}

export default Content