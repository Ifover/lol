import React from "react";

const Header = () => {
    return (
        <div className="vedionav">
            <div className="videoMargin">
                <div className="nav-l">
                    <img src="//ossweb-img.qq.com/images/lol/v/v2/lol-logo.png" width="132px" height="49px"/>
                    <a href="#">视频中心</a>
                </div>
                <div className="nav-m">
                    <a href="#">首页<br/><span>HOME</span></a>
                    <a href="#">官方<br/><span>OFFICIAL</span></a>
                    <a href="#">娱乐<br/><span>ENTERTAINMENT</span></a>
                    <a href="#">赛事<br/><span>MATCH</span></a>
                    <a href="#">教学<br/><span>GUIDE</span></a>
                </div>
                <div className="nav-r">
                    <div className="head-userinfo-avatar">
                        <img id="headimg" src="//ossweb-img.qq.com/images/lol/v2/personal/avatar/default.png"
                             width="36" height="36" alt="玩家头像"/>
                        <span></span>

                    </div>
                    <i className='altt'>
                        亲爱的召唤师，欢迎<a href="#">登录</a>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Header