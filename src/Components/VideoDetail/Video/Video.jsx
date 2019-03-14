import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {Icon} from 'antd'
import 'antd/dist/antd.min.css';

import ajax from '@/api/axios'

// import players from '@/api/tvp.player_v2'


class Video extends Component {
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            id: props.id,
            flag: false,
            detailInfo: []
        }

    }

    componentDidMount() {

        ajax.get('/v1/video_detail_info', {
            params: {
                docid: this.state.id
            }
        }).then(data => {
            this.setState({
                    detailInfo: data.data.data.result
                }, () => {
                    let info = data.data.data.result
                    this.setState({
                        flag: true
                    });
                    // let ids = document.getElementById('mode-player')
                    // console.log(ids.offsetWidth);
                    // console.log(window.pageXOffset);
                    var tvp = window.tvp
                    var video = new tvp.VideoInfo();
                    video.setVid(info.sVID);//视频vid
                    var player = new tvp.Player(1345, 630);//视频高宽
                    player.setCurVideo(video);
                    player.addParam("autoplay", "0");//是否自动播放，1为自动播放，0为不自动播放
                    player.addParam("wmode", "opaque");
                    player.addParam("showend", 0);
                    player.addParam("adplay", 0);
                    player.addParam("wmode", "transparent");
                    // player.addParam("pic", info.sPic);//默认图片地址
                    // player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");//是否调用精简皮肤，不使用则删掉此行代码

                    player.write("mode-player");

                }
            );
            // console.log(this.state.detailInfo);
        })
    }

    render() {
        let videoDetailInfo = {};
        let htmlObj = []
        if (this.state.flag) {
            videoDetailInfo = this.state.detailInfo
            htmlObj.push(
                <div className="mod-row-box" key={0}>
                    <div className="video-title-box">
                        <h6 className="video-title" id="video-title">{videoDetailInfo.sTitle}</h6>
                    </div>
                    <div className="video-video-detail">
                            <span className="video-release-time" id="createTime">
                                发布时间：{videoDetailInfo.sIdxTime.substr(0, 10)}
                            </span>
                        <span className="video-plays-num">
                                <Icon type="play-circle"/>
                                <span id="playTime">{videoDetailInfo.iTotalPlay}</span>
                        </span>
                    </div>
                </div>
            )
        }
        return (
            <div className="video-play">
                <div className='video-layout'>
                    <div id='mode-player'></div>
                    {htmlObj}
                </div>
                {/*<video controls  src="https://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/i0846ypdg4n.p712.1.mp4?sdtfrom=v1104&amp;guid=aa57f26ff00adcbf291566a4de1ac9b7&amp;vkey=4DB09272E2D811DD623078EBB1D8533012C49A58F7999E3C9AAD855D6F552E78119F592579A0EF84867D3246DED8D262A0DE46297EC93839B200696C0A91AA2E22694637E25C03315A2D44B78B6453A4CD3E33E3FD53FD32931C965068C76658EBA30F40C79A35958CB193149123A4916E22063B5A986E4F"></video>*/}
            </div>
        );
    }
}

export default withRouter(Video)