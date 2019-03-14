import React, {Component} from 'react';
import './style.scss'
import {Icon} from 'antd'
import 'antd/dist/antd.min.css'
import ajax from '@/api/axios';
import Header from '@/Components/FANART/Header/Header'
import Footer from '@/Components/FANART/Footer/Footer'

class FanArtDetail extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.id)
        this.state = {
            id: this.props.match.params.id,
            videoDetail: {},
            flag: false
        }
    }

    componentWillMount() {
        // console.log(this.state.id)
        ajax.get('/v1/fanart_detail', {
            params: {
                contentId: this.state.id
            }
        }).then(data => {
            console.log(data.data.jData.data)
            this.setState({
                videoDetail: data.data.jData.data,
                flag: true
            })
        })
    }


    render() {
        let userimg = '';
        if (this.state.flag == true) {
            userimg = this.state.videoDetail.sUrl.replace('s=40', 's=100')
        }
        console.log(userimg)
        return (
            <div>
                <Header/>
                <div id="Lfanart">
                    <div className="fanlayout">
                        <div id="main">
                            <div className="nav">
                                <a href="#">首页 > 画作详情</a>
                            </div>
                            <div className="detail">
                                <div className="user">
                                    <div className="user-top">
                                        <img src={userimg} className="userimg"/>
                                        <h4>{this.state.videoDetail.sNickName} <Icon type="man"/></h4>
                                        <div className="btn_box">关注</div>
                                        <h5>官方号，分享美服Fanart玩家作<br/>品</h5>
                                        <div className="box2">http://fanart.na.leagueoflegen<br/>ds.com/</div>
                                        <div className="box3 clear">
                                            <div className="box3-left">214<br/><span>作品数</span></div>
                                            <div className="box3-right">1724<br/><span>粉丝数</span></div>
                                        </div>
                                    </div>
                                    <div className="user-bottom">
                                        <h6>分享到：<Icon type="weibo"/>&nbsp;<Icon type="wechat"/>&nbsp;<Icon
                                            type="qq"/>&nbsp;
                                            <Icon type="facebook"/>&nbsp;</h6>
                                    </div>
                                </div>


                                <h3>{this.state.videoDetail.sTitle}</h3>
                                <p className="p1"><Icon type="highlight"/> 画作</p>
                                <p className="p2">一天前 发布&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="eye"/> 浏览： 529
                                </p>
                                <p className="p3">{this.state.videoDetail.sIntro}</p>
                                <div className="photo">
                                    <img src={this.state.videoDetail.sCoverUrl}/>
                                    <ul className="clear">
                                        <li><Icon type="like"/><h4>8</h4></li>
                                        <li><Icon type="dislike"/><h4>0</h4></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="comment">

                                <div className="comment-bottom">
                                    <h4>参与回复 (0 回复)</h4>
                                    <textarea placeholder="说点什么吧..."></textarea>
                                    <p className="emit"><a href="#"><Icon type="highlight"/> 发表评论</a></p>
                                    <p className="evalute">最新评论</p>
                                    <ul>
                                        <div className="nodata"><i></i><p>暂无评论</p></div>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default FanArtDetail