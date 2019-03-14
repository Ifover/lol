import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import 'antd/dist/antd.min.css';
import ajax from '@/api/axios'

class VideoRecommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            flag: false,
            list: []
        }


    }

    fn_changeRecommendVideos() {
        this.setState({
            list: [],
            flag: false
        })
        ajax.get('/v1/video_recommend', {
            params: {
                docid: this.state.id,
                num: 5
            }
        }).then(data => {
            this.setState({
                list: data.data.data.result
            }, () => {
                this.setState({
                    flag: true
                })

            })

            // console.log(data.data.data.result);
        })
    }

    componentWillMount() {
        ajax.get('/v1/video_recommend', {
            params: {
                docid: this.state.id,
                num: 5
            }
        }).then(data => {
            this.setState({
                list: data.data.data.result
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
                htmlArr.push(
                    <li key={index}>
                        <Link to={'/videodetail/' + item.iDocID} >
                            <img src={item.sIMG}/>
                            <span>{item.sTitle}</span>
                            <p>
                                <Icon type="play-circle"/>
                                {item.iTotalPlay}次播放 &nbsp;&nbsp;&nbsp;{item.sIdxTime.substr(0, 10)}
                            </p>
                        </Link>
                    </li>
                )
            })
        }

        return (
            <div className="main-l">
                <div className="main-l-t clear">
                    <p>相关推荐</p>
                    <a href="javascript:;" onClick={this.fn_changeRecommendVideos.bind(this)}><Icon type="reload"/> 换一批</a>
                </div>

                <div className="main-l-m">
                    <ul>
                        {htmlArr}
                    </ul>
                </div>
                <div className="main-l-b">
                    <div className="main-l-b-t">
                        <h3>网友评论 <span>文明上网理性发信，请遵守<a href="#">新闻评论服务协议</a></span></h3>
                        <i>0条评论</i>
                    </div>
                    <div className="main-l-b-b">
                        <div className="evolutebox">
                            <img src="//mat1.gtimg.com/v/comment/images/avatar_default.9d95c455.jpg"/>
                            <textarea className="evolute" placeholder="说两句吧..."/>
                            <div className="login">登录</div>
                        </div>
                        <h4>暂无评论哦！赶快来评论一下吧！</h4>

                    </div>
                </div>
            </div>
        )
    }
}

export default VideoRecommend