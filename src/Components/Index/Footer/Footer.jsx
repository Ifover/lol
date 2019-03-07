import React, {Component} from 'react';
import './style.scss';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="footer_margin">
                    <div className="footer-left">
                        <div className="footer-left-1"/>
                        <div className="footer-left-2"/>
                    </div>
                    <div className="footer-right">
                        <div className="footer-top">
                            <p>
                                <a>腾讯互动娱乐</a>
                                <span>|</span>
                                <a>服务条款</a>
                                <span>|</span>
                                <a>腾讯游戏隐私保护指引</a>
                                <span>|</span>
                                <a>腾讯游戏隐私招聘</a>
                                <span>|</span>
                                <a>腾讯游戏客服</a>
                                <span>|</span>
                                <a>游戏地图</a>
                                <span>|</span>
                                <a>商务合作</a>
                                <span>|</span>
                                <a>腾讯网</a>
                                <span>|</span>
                                <a>网站导航</a>
                            </p>
                            <h3>腾讯公司版权所有</h3>
                            <h3>COPYRIGHT © 1998 - 2019 TENCENT. ALL RIGHTS RESERVED.</h3>
                            <h3>COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</h3>
                            <h3>本网络游戏适合18+岁的用户使用；为了您的健康，请合理控制游戏时间。</h3>
                            <h3>粤网文[2017]6138-1456号|（总）网出证（粤）字第057号</h3>
                            <h3>批准文号：新出审字[2011]310号 |文网进字[2011] 004号 | 出版物号：ISBN
                                978-7-89989-145-2|全国文化市场统一举报电话：12318</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer