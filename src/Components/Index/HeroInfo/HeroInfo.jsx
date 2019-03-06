import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import img_search from '@/static/images/index/search_ico.png'
import {Menu, Icon} from 'antd';
import './style.scss'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeroInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroList: {},
            realHeroList: {},
            indexType: 'ALL'
        }
    }

    componentWillMount() {
        axios.get('/v1/champion').then(data => {
            this.setState({
                heroList: data.data.data,
                realHeroList: data.data.data
            })
        })
    }

    ov_fn_changeType(type) {
        this.setState({
            realHeroList: []
        })
        if (type !== 'ALL') {
            let realHeroList = []
            for (let i in this.state.heroList) {
                this.state.heroList[i].tags.map(item => {
                    if (item === type) {
                        realHeroList.push(this.state.heroList[i])
                    }
                })
            }
            this.setState({
                indexType: type,
                realHeroList
            })
        } else {
            this.setState({
                indexType: type,
                realHeroList: this.state.heroList
            })
        }

    }

    render() {
        let heroArr = [];
        let realHeroList = this.state.realHeroList
        // console.log(heroList);
        for (let item in realHeroList) {
            // console.log(realHeroList[item]);
            heroArr.push(
                <li key={item}>
                    <Link to={'info-detail/' + realHeroList[item].id}>
                        <img src={`http://ossweb-img.qq.com/images/lol/img/champion/${realHeroList[item].id}.png`}/>
                        <p>{realHeroList[item].name}</p>
                        <div className="bbb">
                            <img src={img_search}/>
                        </div>
                    </Link>
                </li>
            )
        }
        return (
            <div id="yxzl">
                <div className='layout'>
                    <div className="yxzl-top">
                        <dl className="clear">
                            <dt className="te">
                                <a href="#">英雄资料</a>
                            </dt>
                            <dd className={this.state.indexType === 'ALL' ? 'active' : ''}
                                onClick={this.ov_fn_changeType.bind(this, 'ALL')}>
                                <a href="#">所有英雄</a>
                            </dd>
                            <dd onClick={this.ov_fn_changeType.bind(this, 'Fighter')}
                                className={this.state.indexType === 'Fighter' ? 'active' : ''}><a href="#">战士</a></dd>
                            <dd onClick={this.ov_fn_changeType.bind(this, 'Mage')}
                                className={this.state.indexType === 'Mage' ? 'active' : ''}><a href="#">法师</a></dd>
                            <dd onClick={this.ov_fn_changeType.bind(this, 'Assassin')}
                                className={this.state.indexType === 'Assassin' ? 'active' : ''}><a href="#">刺客</a></dd>
                            <dd onClick={this.ov_fn_changeType.bind(this, 'Tank')}
                                className={this.state.indexType === 'Tank' ? 'active' : ''}><a href="#">坦克</a></dd>
                            <dd onClick={this.ov_fn_changeType.bind(this, 'Marksman')}
                                className={this.state.indexType === 'Marksman' ? 'active' : ''}><a href="#">射手</a></dd>
                            <dd onClick={this.ov_fn_changeType.bind(this, 'Support')}
                                className={this.state.indexType === 'Support' ? 'active' : ''}><a href="#">辅助</a></dd>
                        </dl>
                        <a href="#" className="zlk">资料库 --></a>
                    </div>
                    <div className="yxzl-bottom">
                        <ul className="yxtx clear">
                            {heroArr}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }

}


export default HeroInfo