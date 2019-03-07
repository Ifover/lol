import React, {Component} from 'react'
import './style';

class Header extends Component {
componentDidMount (){
    
}

render() {
    
    return (
        <div className="hdbox">
            <div className='headbox margin'>

                    <div className="logo">
                        <img src="//game.gtimg.cn/images/lol/tr/2018/sprite-img.png" alt=""/>
                    </div>
                    <ul className="lbox">
                        <li><span className="iconfont icon-shouye"></span><a href="/home">首页</a></li>
                        <li><span className="iconfont icon-paihang"></span><a href="/home">排行</a></li>
                        <li><span className="iconfont icon-gaojian-zuozhe"></span><a href="/home">作者</a></li>
                        <li><span className="iconfont icon-huodong"></span><a href="/home">活动</a></li>
                    </ul>
                    <div className="rbox">
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="关键词"
                                name="searchKeyword"
                                onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <button className="btn btn-primary"
                        onClick={(e) => this.onSearch()}>搜索</button>
                    </div>
            </div>
        </div>
    )
}

}

export default Header