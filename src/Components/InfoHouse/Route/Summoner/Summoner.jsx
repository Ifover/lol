import React, {Component} from 'react';
import ajax from '@/api/axios'

import './style.scss'

class Summoner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summonerList: [],
            index: 0,
            flag: false
        }
    }

    componentWillMount() {
        ajax.get('/v1/summoner').then(data => {
            let arr = [];
            let summonerLists = data.data.data
            for (let i in summonerLists) {
                arr.push(summonerLists[i])
            }
            this.setState({summonerList: arr}, () => {
                this.setState({flag: true})
            });
        })

    }

    render() {
        let summonerList = []
        let realSummoner = []
        if (this.state.flag) {
            summonerList = this.state.summonerList
            realSummoner.push(
                <div className='center-right' key={0}>
                    <div className='center-right-title'>
                        <img src={`https://ossweb-img.qq.com/images/lol/img/spell/${summonerList[this.state.index].image.full}`} alt=""/>
                        <p>
                            <span>{summonerList[this.state.index].name}</span>
                            <span>召唤师等级：{summonerList[this.state.index].maxrank}级</span>
                        </p>
                    </div>
                    <p>{summonerList[this.state.index].description}</p>
                    <img src={`https://ossweb-img.qq.com/images/lol/web201310/summoner/${summonerList[this.state.index].key}.jpg`} alt=""/>
                </div>
            )
        }
        return (
            <div className='summoner'>
                <div className='center-left'>
                    <ul>
                        {
                            summonerList.map((item, index) => {
                                return (
                                    <li key={index} className={this.state.index === index ? 'active_chose' : ''}
                                        onClick={() => {
                                            // console.log(value);
                                            this.setState({index});
                                        }}>
                                        <img src={'//ossweb-img.qq.com/images/lol/img/spell/' + item.image.full}
                                             alt=""/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {realSummoner}
            </div>
        )
    }
}

export default Summoner