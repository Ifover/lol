import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import 'antd/dist/antd.min.css';
import ajax from '@/api/axios'

class VideoDayHot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

    }

    componentWillMount() {
        ajax.get('/v1/video_hot_day').then(data => {
            this.setState({
                list: data.data.msg.dpvlist
            }, () => {
                this.setState({
                    flag: true
                })
            })
        })
    }

    render() {
        let htmlArr = []
        if (this.state.flag) {
            this.state.list.map((item, index) => {
                // console.log(item);
                htmlArr.push(
                    <li key={index}>
                        <Link to={'/videodetail/' + item.iDocID}>
                            <img src={item.sIMG}/>
                            <div className='title_bottom'>
                                <span>{item.sTitle}</span>
                                <p><Icon type="play-circle"/> <span>{item.iPlayAll}</span></p>
                            </div>
                        </Link>
                    </li>
                )
            })
        }

        return (
            <div className="main-r">
                <div className="main-r-t">
                    <p><img src="/images/shu.jpg" width="3px" height="26px"/>相关推荐</p>
                </div>
                <div className="main-r-b">
                    <ul>
                        {htmlArr}
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoDayHot