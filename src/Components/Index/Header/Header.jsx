import React, {Component} from 'react';
import './style.scss'
class Com extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header-lol">
        <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_20b80b41d0e442c06996112a53f4b04c/0"/>
        <div className="big-box">
          <div className="top">
            <div className="margin">
              <img src="http://ossweb-img.qq.com/images/lol/v3/logo.png"/>
              <ul>
                <li>
                  <p>游戏资料</p>
                  <p className="te">GAME INFO</p>
                </li>
                <li>
                  <p>商城/合作</p>
                  <p className="te">STORE</p>
                </li>
                <li>
                  <p>社区互动</p>
                  <p className="te">COMMUNITY</p>
                </li>
                <li>
                  <p>赛事官网</p>
                  <p className="te">ESPORTS</p>
                </li>
                <li>
                  <p>自助系统</p>
                  <p className="te">SYSTEM</p>
                </li>
              </ul>
              <div className="head-userinfo-normal">
                <div className="head-userinfo-avatar">
                  <img src="//ossweb-img.qq.com/images/lol/v2/personal/avatar/default.png" width="36" height="auto"
                       alt="玩家头像"/>
                    <span></span>
                    <a href="//lol.qq.com/space/index.shtml"  className="herf-mask" title="个人中心"></a>
                </div>
                <div className="head-userinfo-brief">
                  <p className="unlogin">亲爱的召唤师，欢迎<a href="#">登录</a></p>
                </div>
              </div>

              <div className="top-right-5"></div>
              <div className="top-right-6">
                <span className="a-1">当前游戏版本</span>
                <span className="a-2">Ver 9.4</span>
                <span className="a-3">版本详情</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  export default Com