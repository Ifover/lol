import React, {Component} from 'react';
import {Input} from 'antd';
import './style';

const Search = Input.Search;

class Header extends Component {
    componentDidMount() {

    }

    render() {

        return (
            <div className="hdbox">
                <div className='headbox'>
                    <div className="logo">
                        <img src="//game.gtimg.cn/images/lol/tr/2018/sprite-img.png" alt=""/>
                    </div>
                    <ul className='lbox'>
                        <li><span className="iconfont icon-shouye"></span><a href="#/fanart/home">首页</a></li>
                        <li><span className="iconfont icon-paihang"></span><a href="#/fanart/rank">排行</a></li>
                        <li><span className="iconfont icon-gaojian-zuozhe"></span><a href="#/fanart/author">作者</a></li>
                        <li><span className="iconfont icon-huodong"></span><a href="#/fanart/activity">活动</a></li>
                    </ul>
                    <div className="rbox">
                        <Search
                            placeholder="搜你要搜索的东西(没用的)"
                            onSearch={value => console.log(value)}
                            enterButton="Search"
                            size="large"
                        />
                        {/*<div className="form-group">*/}
                        {/*<input type="text"*/}
                        {/*className="form-control"*/}
                        {/*placeholder="关键词"*/}
                        {/*name="searchKeyword"*/}
                        {/*onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}*/}
                        {/*onChange={(e) => this.onValueChange(e)}/>*/}
                        {/*</div>*/}
                        {/*<button className="btn btn-primary">搜索</button>*/}
                    </div>
                </div>
            </div>
        )
    }

}

export default Header