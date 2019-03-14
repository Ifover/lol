import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import ajax from '@/api/axios'

import './style.scss'


class EventCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamList: [],
            list: [],
            userslist: [],
            position: [],
            superUsersIndex: 0,
            slide: 0,
            scoreList: []
        }
    }

    componentWillMount() {
        //获取队伍信息
        ajax.get('/v1/team_list').then(data => {
            this.setState({
                teamList: data.data.msg
            }, () => {
                //获取比赛信息
                ajax.get('/v1/searchBMatchInfo').then(data => {
                    let strLeft = 'BMatchList = ';
                    let list = JSON.parse(data.data.substr(data.data.indexOf(strLeft) + strLeft.length)).msg.result;
                    let slide = 0;
                    for (let i in list) {
                        if (new Date(list[i].MatchDate) >= new Date()) {
                            slide = i;
                            break
                        }
                    }
                    this.setState({
                        list,
                        slide
                    })
                })

                //积分榜
                ajax.get('/v1/team_score_top').then(data => {
                    this.setState({
                        scoreList: data.data.msg.score[0]
                    })
                    // console.log(data.data.msg.score[0]);
                })

            });
        })
        ajax.get('/v1/team_member_lsit').then(data => {
            this.setState({
                userslist: data.data.msg
            }, () => {
                //最强战力
                ajax.get('/v1/battle_score_lsit').then(data => {
                    let position = [];
                    // console.log(data.data.msg.position);
                    for (let i in data.data.msg.position) {
                        position.push(data.data.msg.position[i])
                    }
                    this.setState({position})
                })
            })
        })


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        var eventCenterWwiper = new Swiper('#eventcenter-swiper', {
            slidesPerView: 5,
            // spaceBetween: 16,
            // centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            initialSlide: this.state.slide,
            normalizeSlideIndex: false
        });
    }

    render() {

        let arr = [];
        // console.log(this.state.position);
        this.state.list.map((item, index) => {
            arr.push(
                <div className="swiper-slide center2-top" key={index}>
                    <div className={`center2-top-top ${new Date(item.MatchDate) < new Date() ? 'over' : 'wait'}`}>
                        <i></i>
                        <span className="span1">{new Date(item.MatchDate) < new Date() ? '已结束' : '未开始'}</span>
                        <span className="span3">{item.MatchDate.split(' ')[1].substr(0, 5)}</span>
                        <span className="span2">{item.MatchDate.split(' ')[0].substr(5)}</span>
                    </div>
                    <div className="center2-center">
                        <div className="team-a">
                            <span>
                            <img src={this.state.teamList[item.TeamA].TeamLogo}/>
                            </span>
                            <a>{this.state.teamList[item.TeamA].TeamName}</a>
                        </div>
                        <div className="team-b">
                            <span>
                                <img src={this.state.teamList[item.TeamB].TeamLogo}/>
                            </span>
                            <a>{this.state.teamList[item.TeamB].TeamName}</a>
                        </div>
                        <span className="gamelist-score">
                          <a>{item.ScoreA}</a>
                          <a>:</a>
                          <a>{item.ScoreB}</a>
                        </span>
                        <span className="gamelist-over"
                              title="视频回顾">视频回顾</span>
                        <p className="p1">2019职业联赛</p>
                        <p className="p2">{item.GameTypeName} {item.GameProcName} BO{item.GameMode}</p>
                    </div>
                </div>
            )

        })
        let superUsersArr = [];
        if (this.state.position[this.state.superUsersIndex]) {
            // console.log(this.state.position);
            this.state.position[this.state.superUsersIndex].map((item, index) => {
                // console.log(item);
                superUsersArr.push(
                    <li key={index}>
                        <div className="ranking">
                            <span><b>{index + 1}</b></span>
                            <img src={this.state.teamList[this.state.userslist[item.Player].TeamId].TeamLogo}/>
                        </div>
                        <div className='user-head'>
                            <img src={this.state.userslist[item.Player].UserIcon}/>
                        </div>
                        <div className="te">
                            <h3>{this.state.userslist[item.Player].NickName}</h3>
                            <h4>战力 : {item.Score}</h4>
                        </div>
                    </li>
                )
            })
        }
        let scoreArr = []
        // console.log(this.state.teamList);
        this.state.scoreList.map((item, index) => {
            scoreArr.push(
                <li key={index}>
                    <a className="a-1">{index + 1}</a>
                    <a className="a-2">
                        <img src={this.state.teamList[item.TeamId].TeamLogo}/>
                        {item.TeamName}
                    </a>
                    <a className="a-3">{item.Value1}/{item.Value3}</a>
                    <a className="a-4">{item.Score}</a>
                </li>
            )
        })
        return (
            <div className="big-box">
                <div className="margin">
                    <div className="top">
                        <div className="title-left">
                            <span className="top2">赛事中心</span>
                            <span className="top3">春季赛常规赛</span>
                            <span className="top4">春季赛季后赛</span>
                        </div>
                        <div className='title-right'>
                            <img
                                src="//img.crawler.qq.com/lolwebvideo/20190110144632/5be71f6435e24889e16dad4ac3570f67/0"/>
                            <span className="top5">2019LPL春季赛</span>
                            <span className="top6">更多</span>
                        </div>
                    </div>
                    <div className="center">
                        <div className="swiper-container" id='eventcenter-swiper'>
                            <div className="swiper-wrapper">
                                {arr}
                            </div>
                            <div className="swiper-button-next"/>
                            <div className="swiper-button-prev"/>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-left">
                            <div className="bottom-left-top">
                                <b>最强战力</b>
                                <ul>
                                    <li className={this.state.superUserIndex === 0 ? 'active' : ''}>
                                        <span onClick={() => {
                                            this.setState({superUsersIndex: 0})
                                        }}>上路
                                        </span>
                                    </li>
                                    <li className={this.state.superUserIndex === 1 ? 'active' : ''}>
                                        <span onClick={() => {
                                            this.setState({superUsersIndex: 1})
                                        }}>打野
                                        </span>
                                    </li>
                                    <li className={this.state.superUserIndex === 2 ? 'active' : ''}>
                                        <span onClick={() => {
                                            this.setState({superUsersIndex: 2})
                                        }}>中路
                                        </span>
                                    </li>
                                    <li className={this.state.superUserIndex === 3 ? 'active' : ''}>
                                        <span onClick={() => {
                                            this.setState({superUsersIndex: 3})
                                        }}>下路
                                        </span>
                                    </li>
                                    <li className={this.state.superUserIndex === 4 ? 'active' : ''}>
                                        <span onClick={() => {
                                            this.setState({superUsersIndex: 4})
                                        }}>辅助
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom-left-bottom">
                                <ul>
                                    {superUsersArr}
                                </ul>
                            </div>
                        </div>
                        <div className="bottom-right">
                            <div className="rank">积分榜</div>
                            <h4 className="rank-list">
                                <a className="a-1">排名</a>
                                <a className="a-2">俱乐部</a>
                                <a className="a-3">胜负</a>
                                <a className="a-4">积分</a>
                            </h4>
                            <ul className="club">
                                {scoreArr}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EventCenter;