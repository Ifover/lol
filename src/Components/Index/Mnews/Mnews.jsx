import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
import './style';
import {Tabs} from 'antd';
import api from '@/api/news';
import 'antd/dist/antd.css'


class NewsNav extends Component {
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
            tabsData: {},
            zhdata: [],
            ggdata: [],
            ssdata: [],
            gldata: [],
            sqdata: []
        }
    }

    componentDidMount() {
        let count = 0
        this.state.tabsList.map(item => {
            let obj = {
                page: 1,
                num: 8,
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

    render() {
        const {mode} = this.state;
        const TabPane = Tabs.TabPane;

        let tabPaneArr = [];
        if (this.state.flag) {
            this.state.tabsList.map((item, index) => {
                tabPaneArr.push(
                    <TabPane tab={item.title} key={item.id}>
                        <ul className="newslist">
                            <li className="first"><a href="#">{this.state.tabsData[item.id].result[0].sTitle}</a></li>
                            {
                                this.state.tabsData[item.id].result.slice(1, 7).map((item, index) => {
                                    let tag = this.state.sTagIdsTagsKey[item.sTagIds.split(',')[0]] || this.state.sTagIdsTagsKey['ndefault']
                                    return (
                                        <li key={index}>
                                            <div className="center">
                                                <span className={`spe ${tag.n_class}`}>{tag.c_tag}</span>
                                                <a href="#" className="p1p">{item.sTitle}</a>
                                                <span className="pdate">{item.sIdxTime.substr(5, 5)}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            <li className="last">
                                <span>阅读更多</span>
                                <NavLink to="/news">最新资讯 --></NavLink>
                            </li>
                        </ul>
                    </TabPane>
                )
            })


        }

        return (
            <div className="allnews">
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={mode}
                >
                    {tabPaneArr}
                </Tabs>
            </div>
        )
    }
}

export default NewsNav