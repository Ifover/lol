import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.scss';
import {Tabs, Pagination, Icon} from 'antd';
// import PropTypes from 'prop-types';
import api from '@/api/news';
import 'antd/dist/antd.css'

import Header from '@/Components/Index/Header/Header'
import Footer from '@/Components/Index/Footer/Footer'

const TabPane = Tabs.TabPane;

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'top',
            flag: false,
            index: 0,
            sTagIdsTagsKey: {
                ndefault: {
                    n_tag: '默认',
                    n_class: 'news',
                    c_tag: '新闻'
                },
                1253: {
                    n_tag: '视频',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1254: {
                    n_tag: '视频-娱乐',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1255: {
                    n_tag: '视频-娱乐-主播视频',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1256: {
                    n_tag: '视频-娱乐-精彩操作',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1257: {
                    n_tag: '视频-娱乐-欢乐搞笑',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1258: {
                    n_tag: '视频-娱乐-同人动画',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1259: {
                    n_tag: '视频-娱乐-其他',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1260: {
                    n_tag: '视频-赛事',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1261: {
                    n_tag: '视频-赛事-比赛集锦',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1262: {
                    n_tag: '视频-赛事-人物采访',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1263: {
                    n_tag: '视频-赛事-分析评论',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1264: {
                    n_tag: '视频-赛事-其他',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1496: {
                    n_tag: '视频-赛事-全场回顾',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1265: {
                    n_tag: '视频-教学',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1266: {
                    n_tag: '视频-教学-外服抢先看',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1267: {
                    n_tag: '视频-教学-玩法教学',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1268: {
                    n_tag: '视频-教学-版本解读',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1269: {
                    n_tag: '视频-教学-其他',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1270: {
                    n_tag: '视频-官方',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1271: {
                    n_tag: '视频-官方-CG动画',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1272: {
                    n_tag: '视频-官方-音乐作品',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1273: {
                    n_tag: '视频-官方-英雄',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1274: {
                    n_tag: '视频-官方-皮肤',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1275: {
                    n_tag: '视频-官方-开发者基地',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1276: {
                    n_tag: '视频-官方-其他',
                    n_class: 'amusement',
                    c_tag: '视频'
                },
                1278: {
                    n_tag: '娱乐趣闻',
                    n_class: 'news',
                    c_tag: '娱乐'
                },
                1279: {
                    n_tag: '娱乐与趣闻',
                    n_class: 'news',
                    c_tag: '娱乐'
                },
                1280: {
                    n_tag: '赛事',
                    n_class: 'event',
                    c_tag: '赛事'
                },
                1281: {
                    n_tag: '赛事-国内赛事',
                    n_class: 'event',
                    c_tag: '赛事'
                },
                1282: {
                    n_tag: '赛事-其他赛区',
                    n_class: 'event',
                    c_tag: '赛事'
                },
                1283: {
                    n_tag: '赛事-国际赛事',
                    n_class: 'event',
                    c_tag: '赛事'
                },
                1284: {
                    n_tag: '赛事-其他',
                    n_class: 'event',
                    c_tag: '赛事'
                },
                1285: {
                    n_tag: '教学',
                    n_class: 'tutorial',
                    c_tag: '教学'
                },
                1286: {
                    n_tag: '教学-英雄教学',
                    n_class: 'tutorial',
                    c_tag: '教学'
                },
                1287: {
                    n_tag: '教学-综合攻略',
                    n_class: 'tutorial',
                    c_tag: '教学'
                },
                1288: {
                    n_tag: '教学-版本解读',
                    n_class: 'tutorial',
                    c_tag: '教学'
                },
                1289: {
                    n_tag: '教学-外服快讯',
                    n_class: 'tutorial',
                    c_tag: '教学'
                },
                1290: {
                    n_tag: '教学-其他',
                    n_class: 'tutorial',
                    c_tag: '教学'
                },
                1291: {
                    n_tag: '官方',
                    n_class: 'inform',
                    c_tag: '官方'
                },
                1292: {
                    n_tag: '官方-公告',
                    n_class: 'inform',
                    c_tag: '公告'
                },
                1293: {
                    n_tag: '官方-新闻',
                    n_class: 'inform',
                    c_tag: '新闻'
                },
                1294: {
                    n_tag: '官方-其他',
                    n_class: 'inform',
                    c_tag: '其他'
                },
                1334: {
                    n_tag: '官方-版本',
                    n_class: 'inform',
                    c_tag: '版本'
                },
                1569: {
                    n_tag: '官方-论坛',
                    n_class: 'inform',
                    c_tag: '论坛'
                },
                1295: {
                    n_tag: '其他',
                    n_class: 'news',
                    c_tag: '其他'
                }
            },
            tabsList: [
                {
                    id: 0,
                    title: '综合',
                    name: 'zh',
                    target: 23
                }, {
                    id: 1,
                    title: '公告',
                    name: 'gg',
                    target: 24
                }, {
                    id: 2,
                    title: '赛事',
                    name: 'ss',
                    target: 25
                }, {
                    id: 3,
                    title: '攻略',
                    name: 'gl',
                    target: 27
                }, {
                    id: 4,
                    title: '社区',
                    name: 'sq',
                    target: 28
                }],
            tabsData: {}
        }
    }

    componentDidMount() {

        let count = 0
        this.state.tabsList.map(item => {
            let obj = {
                page: 1,
                num: 16,
                target: item.target
            }
            api.requestData(obj).then(data => {
                // console.log(data.data.data)
                let tabsData = this.state.tabsData
                tabsData[item.id] = data.data.data
                this.setState({
                    tabsData
                }, () => {
                    count++
                    if (count === 5) this.setState({flag: true})
                })
            })
        })
    }

    fn_Change_Page(pageNumber) {
        // console.log(this);
        let tabsData = this.state.tabsData
        tabsData[this.state.tabsList[this.state.index].id] = []
        this.setState({tabsData, flag: false})
        let obj = {
            page: pageNumber,
            num: 16,
            target: this.state.tabsList[this.state.index].target
        }
        // console.log(obj);
        api.requestData(obj).then(data => {
            let tabsData = this.state.tabsData;
            tabsData[this.state.tabsList[this.state.index].id] = data.data.data
            this.setState({
                tabsData,
            }, () => {
                this.setState({flag: true})
                window.scrollTo(0,0);
            })
        })
    }

    render() {
        const {mode} = this.state;
        let tabPaneArr = []
        if (this.state.flag) {
            this.state.tabsList.map((item, index) => {

                tabPaneArr.push(
                    <TabPane tab={item.title} key={item.id}>
                        <ul>
                            {
                                this.state.tabsData[item.id].result.map((item, index) => {
                                    // console.log(item.sTagIds.split(',')[0], this.state.sTagIdsTagsKey[item.sTagIds.split(',')[0] === '1561' ? 'ndefault' : item.sTagIds.split(',')[0]]);

                                    let tag = this.state.sTagIdsTagsKey[item.sTagIds.split(',')[0]] || this.state.sTagIdsTagsKey['ndefault']
                                    return (
                                        <li className="msg" key={index}>
                                            <span
                                                className={`leftMsg ${tag.n_class}`}> {tag.c_tag}</span>
                                            <p className="contentMsg">{item.sTitle}</p>
                                            <span className="dataMsg">{item.sCreated}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="pages">
                            <Pagination showQuickJumper defaultCurrent={this.state.tabsData[item.id].resultPage} defaultPageSize={16}
                                        onChange={(ev) => {
                                            // console.log(ev);
                                            this.fn_Change_Page(ev)
                                        }}
                                        total={this.state.tabsData[item.id].resultTotal}/>
                        </div>
                    </TabPane>
                )
            })
        }


        return (
            <div id="app">
                <Header/>
                <div className="box-news">
                    <p className="caution">
                        <Icon type="home"/>
                        <Link to="/">英雄联盟首页</Link>
                        <span className="jt">></span>
                        <span className="here">新闻列表</span>
                    </p>
                    <div className="newsBox">
                        <div className="newsList">
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition={mode}
                                onChange={(keyValue) => {
                                    this.setState({index: keyValue})
                                }}
                            >
                                {tabPaneArr}
                            </Tabs>
                        </div>
                        <div className="twoCode">
                            <div className="codeBox">
                                <img src="//ossweb-img.qq.com/images/lol/v3/zm-qrcode.jpg"/>
                                <div className="pBox">
                                    <p className="p1">掌上英雄联盟</p>
                                    <p className="p2">官方咨询 快速掌握</p>
                                    <p className="p3">扫一扫立即下载</p>
                                </div>
                            </div>
                            <div className="codeBox">
                                <img src="//ossweb-img.qq.com/images/lol/v3/wb-qrcode.jpg"/>
                                <div className="pBox">
                                    <p className="p1">英雄联盟官方微博</p>
                                    <p className="p2">官方服务平台精彩不停 互动有你</p>
                                    <p className="p3">扫一扫即可关注</p>
                                </div>
                            </div>
                            <ul className="navigation">
                                <li><a href="#"><Icon type="play-circle" theme="twoTone"/>视频中心</a></li>
                                <li><a href="#"><Icon type="trophy" theme="twoTone"/>赛事中心</a></li>
                                <li><a href="#"><Icon type="gift" theme="twoTone"/>领取中心</a></li>
                                <li><a href="#"><Icon type="rocket" theme="twoTone"/>LOL宇宙</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default News