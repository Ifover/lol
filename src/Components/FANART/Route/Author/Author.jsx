import React, {Component} from 'react'
import './style';
import {Tabs} from 'antd';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import api from '@/api/home';


class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'top',
            tjdata: [],
            gcdata: [],
            rqdata: []
        }
    }

    componentDidMount() {
        api.requesttjData().then(data => {
            // console.log(data.data.msg.data)
            this.setState({
                tjdata: data.data.msg.data
            })
        })
        api.requestgcData().then(data => {
            // console.log(data.data.msg.data)
            this.setState({
                gcdata: data.data.msg.data
            })
        })
        api.requestrqData().then(data => {
            // console.log(data.data.msg.data)
            this.setState({
                rqdata: data.data.msg.data
            })
        })
    }

    render() {
        const TabPane = Tabs.TabPane;
        let tjDataArr = []
        if (this.state.tjdata.length > 0) {
            tjDataArr = this.state.tjdata
        }
        let gcDataArr = [];
        if (this.state.gcdata.length > 0) {
            gcDataArr = this.state.gcdata
        }
        let rqDataArr = [];
        if (this.state.rqdata.length > 0) {
            rqDataArr = this.state.rqdata
        }
        return (
            <div className='atbox'>
                <div className="atcontent">
                    <div className="atnav">
                        <Tabs>
                            <TabPane tab="推荐" key="1">
                                <ul className="atlist">
                                    {tjDataArr.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="attention">
                                                    <a href="#" className="photo">
                                                        <img src={item.sUrl}/>
                                                    </a>
                                                    <div className="introduce">
                                                        <p className="p1">{item.sNickName}</p>
                                                        <p className="p2">{item.sIntro}</p>
                                                        <p className="p3">
                                                            <span>作品数：{item.ContentNum}</span>
                                                            <span>获赞数：{item.iZanCount}</span>
                                                        </p>
                                                        <Button type="primary">关注</Button>
                                                    </div>

                                                </div>
                                                <div className="pictures">
                                                    {
                                                        tjDataArr[index].picArr.map((itm, idx) => {
                                                            return (
                                                                <a href="#" key={idx}><img src={itm.sCoverUrl + '258'}/></a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </TabPane>
                            <TabPane tab="高产" key="2">
                                <ul className="atlist">
                                    {gcDataArr.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="attention">
                                                    <a href="#" className="photo">
                                                        <img src={item.sUrl}/>
                                                    </a>
                                                    <div className="introduce">
                                                        <p className="p1">{item.sNickName}</p>
                                                        <p className="p2">{item.sIntro}</p>
                                                        <p className="p3">
                                                            <span>作品数：{item.ContentNum}</span>
                                                            <span>获赞数：{item.iZanCount}</span>
                                                        </p>
                                                        <Button type="primary">关注</Button>
                                                    </div>

                                                </div>
                                                <div className="pictures">
                                                    {
                                                        gcDataArr[index].picArr.map((itm, idx) => {
                                                            return (
                                                                <a href="#" key={idx}><img src={itm.sCoverUrl + '258'}/></a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </TabPane>
                            <TabPane tab="人气" key="3">
                                <ul className="atlist">
                                    {rqDataArr.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="attention">
                                                    <a href="#" className="photo">
                                                        <img src={item.sUrl}/>
                                                    </a>
                                                    <div className="introduce">
                                                        <p className="p1">{item.sNickName}</p>
                                                        <p className="p2">{item.sIntro}</p>
                                                        <p className="p3">
                                                            <span>作品数：{item.ContentNum}</span>
                                                            <span>获赞数：{item.iZanCount}</span>
                                                        </p>
                                                        <Button type="primary">关注</Button>
                                                    </div>

                                                </div>
                                                <div className="pictures">
                                                    {
                                                        rqDataArr[index].picArr.map((itm, idx) => {
                                                            return (
                                                                <a href="#" key={idx}><img src={itm.sCoverUrl + '258'}/></a>
                                                            )
                                                        })
                                                    }
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