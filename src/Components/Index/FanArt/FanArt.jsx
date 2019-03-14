import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import ajax from '@/api/axios'
import './style.scss'

class FanArt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fanartList: {},
        }
    }

    componentWillMount() {
        ajax.get('/v1/fanartdata?page=1&pagesize=8').then(data => {
            // console.log(data.data.msg.data)
            this.setState({
                fanartList: data.data.msg.data
            })
        })
    }

    render() {
        let fanartArr = []
        let fanartList = this.state.fanartList
        for (let item in fanartList) {
            fanartArr.push(
                <li key={item}>
                    <Link to={'/fanart_detail/' + fanartList[item].iContentId} target='__ablank'>
                        <img src={fanartList[item].sCoverUrl + '258'} className="te"/>
                        <p>{fanartList[item].sTitle}<br/><img src={fanartList[item].sUrl}/>
                            <i>{fanartList[item].sNickName}</i></p>
                    </Link>
                </li>
            )
        }
        return (
            <div className="fanart">
                <div className="layout">
                    <div className="fanart-top">
                        <p></p>
                        <span>FANART创作馆</span>
                        <NavLink to='/fanart/home' target='__ablank' className='more'>更多</NavLink>
                    </div>
                    <div className="fanart-center">
                        <div className="fanart-center-left">
                            <ul>
                                {fanartArr}
                            </ul>
                        </div>
                        <div className="fanart-center-right">
                            <div className="left">
                                <img
                                    src='//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_77e1f7fb57d581e279855a0ddf001063/0'/>
                            </div>
                            <div className="right">
                                <p><img src='//ossweb-img.qq.com/images/lol/v3/href-bg-2.jpg'/></p>
                                <p><img src='//ossweb-img.qq.com/images/lol/v3/href-bg-3.jpg'/></p>
                                <p><img src='//ossweb-img.qq.com/images/lol/v3/href-bg-4.jpg'/></p>
                                <p className='href-partner'><i></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FanArt

