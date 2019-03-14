import React, {Component} from 'react';
import {Icon} from 'antd';
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import {Radio} from 'antd';
import "antd/dist/antd.css";
import ajax from '@/api/axios'

import InfoHeros from '@/Components/InfoHouse/Route/InfoHeros/InfoHeros'
import InfoItems from '@/Components/InfoHouse/Route/InfoItems/InfoItems'
import InfoRune from '@/Components/InfoHouse/Route/InfoRune/InfoRune'
import Summoner from '@/Components/InfoHouse/Route/Summoner/Summoner'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            list: [{
                id: 0,
                title: '英雄',
                route: 'heros'
            }, {
                id: 1,
                title: '物品',
                route: 'items'
            }, {
                id: 2,
                title: '召唤师技能',
                route: 'summoner'
            }, {
                id: 3,
                title: '符文',
                route: 'rune'
            }]
        }
    }


    change1(value) {
        this.setState({
            //根据点击那个index-----value传值给index
            index: value,
            //
            realData: []
        });
        switch (value) {
            //英雄数据
            case 0 :
                this.setState({
                    realData: this.state.imgData
                })
                break;
            //装备数据
            case 1 :
                ajax.get("/v1/items").then(data => {
                    this.setState({
                        zhuangBei: data.data.data,
                        realData: data.data.data
                    })
                })
        }
    }


    render() {


        return (
            <div className="herohouse">
                <div className="margin">
                    <div className="herohouse-top">
                        <span><Icon type="home" theme="filled"/></span>
                        <Link to='/'>英雄联盟首页</Link>
                        <span><Icon type="right"/></span>
                        <a>游戏资料</a>
                        <span><Icon type="right"/></span>
                        <a>{this.state.list[this.state.index].title}</a>
                    </div>
                    <div className="herohouse-center">
                        <div className="herohouse-center-list">
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <NavLink key={index} to={'/infohouse/' + item.route}
                                                 className={`c-1 ${this.state.index === index ? "active2" : ""}`}
                                                 onClick={this.change1.bind(this, index)}>
                                            {item.title}
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                        <Switch>
                            <Route path='/infohouse/heros' component={InfoHeros}></Route>
                            <Route path='/infohouse/items' component={InfoItems}></Route>
                            <Route path='/infohouse/summoner' component={Summoner}></Route>
                            <Route path='/infohouse/rune' component={InfoRune}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content