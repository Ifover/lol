import React, {Component} from 'react'
import './style';


class Footer extends Component {
    render() {
        return (
            <div className="ft">
                <div className="ftbox">
                    <div className='footer'>
                    <div className="leftBox">
                        <a href="#"><img src="//game.gtimg.cn/images/lol/tr/2018/logo-riot.png" alt=""/></a>
                        <a href="#"><img src="//game.gtimg.cn/images/lol/tr/2017/n-logo-zm.png" alt=""/></a>
                        <a href="#"><img src="//game.gtimg.cn/images/lol/tr/2017/n-logo-sina.png" alt=""/></a>
                    </div>
                    <div className="rightBox">
                    <p>
                        <a href="#">腾讯互动娱乐</a>
                        |
                        <a href="#">服务条款</a>
                        |
                        <a href="#">腾讯游戏隐私保护指引</a>
                        |
                        <a href="#">腾讯游戏招聘</a>
                        |
                        <a href="#">腾讯游戏客服</a>
                        |
                        <a href="#">游戏地图</a>
                        |
                        <a href="#">商务合作</a>
                        |
                        <a href="#">腾讯网</a>
                        |
                        <a href="#">网站导航</a>
                        </p>
                        <p>
                        <a href="#">游戏地图</a>
                        |
                        <a href="#">用户协议</a>
                        |
                        <a href="#">作品上传协议</a>
                        |
                        <a href="#">腾讯公司版权所有</a>
                        </p>
                        <p>COPYRIGHT © 1998 - 2019 TENCENT. ALL RIGHTS RESERVED.</p>
                        <p>
                            <a href="#">粤网文[2017]6138-1456号</a>
                        |
                        <a href="#">（总）网出证（粤）字第057号</a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer