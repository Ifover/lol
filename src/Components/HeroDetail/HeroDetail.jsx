import React, {Component} from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './style.scss'

class HeroDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            skillIndex: 0,
            heroDetail: {},
            success: false
        }

    }

    componentWillMount() {
        axios.get('/v1/hero_Detail', {
            params: {
                name: this.state.id
            }
        }).then(data => {
            console.log(data.data.data);
            this.setState({
                heroDetail: data.data.data,
                success: true
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            width: 60,
            slidesPerView: this.state.heroDetail.skins.length,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            loop: false,
            width: 1240,
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }

    fn_Change_Skill_Index(value) {
        this.setState({
            skillIndex: value
        })
        console.log(this);
    }

    render() {
        let skillArr = [];
        let skinSmallArr = [];
        let skinBigArr = [];
        if (this.state.success) {
            skillArr.push(
                <li className={this.state.skillIndex === 0 ? 'active' : ''}
                    onClick={this.fn_Change_Skill_Index.bind(this, 0)} key={0}>
                    <img
                        src={"//ossweb-img.qq.com/images/lol/img/passive/" + this.state.heroDetail.passive.image.full}/>
                </li>
            )
            this.state.heroDetail.spells.map((item, index) => {
                //技能图标
                skillArr.push(
                    <li className={this.state.skillIndex === index + 1 ? 'active' : ''}
                        onClick={this.fn_Change_Skill_Index.bind(this, index + 1)}
                        key={index + 1}>
                        <img
                            src={"//ossweb-img.qq.com/images/lol/img/spell/" + item.image.full}/>
                    </li>
                )
            })

            this.state.heroDetail.skins.map((item, index) => {
                //皮肤小图标
                skinSmallArr.push(
                    <li className={`swiper-slide`} key={index}>
                        <img src={`//ossweb-img.qq.com/images/lol/web201310/skin/small${item.id}.jpg`}/>
                    </li>
                )
                //大皮肤图片
                skinBigArr.push(
                    <div className="swiper-slide" key={index}>
                        <img src={`http://ossweb-img.qq.com/images/lol/web201310/skin/big${item.id}.jpg`}/>
                    </div>
                )
            })

        }

        return (
            <div id='box'>
                {/*<div id="header"/>*/}
                <div className="title">
                    <div className="margin">
                        <div>
                            <span></span>
                            <a>英雄联盟首页</a>
                            <span></span>
                            <a>游戏资料</a>
                            <span></span>
                            <a>全部英雄</a>
                            <span></span>
                            <a className="te">九尾狐狸 阿狸</a>
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="margin">
                        <div className='defail-skin'>
                            <div className="swiper-container gallery-top">
                                <div className="swiper-wrapper">
                                    {skinBigArr}
                                </div>
                            </div>
                            <div className="hero-attribute">
                                <div className="hero-box">
                                    <p className="a-1">九尾妖狐</p>
                                    <p className="a-2"><b>阿狸</b></p>
                                    <p className="a-3">
                                        <span>法师</span>
                                        <span>刺客</span>
                                    </p>
                                    <ul>
                                        <li>物理攻击<a><i className="b-1"></i></a></li>
                                        <li>魔法攻击<a><i className="b-2"></i></a></li>
                                        <li>防御能力<a><i className="b-3"></i></a></li>
                                        <li>上手难度<a><i className="b-4"></i></a></li>
                                    </ul>
                                    <a href='#' className='btn_buy'></a>
                                </div>
                            </div>
                            <div className="hero-skin">
                                <div className="top">
                                    <h3>{}</h3>
                                </div>
                                <div className="swiper-container gallery-thumbs">
                                    <ul className="swiper-wrapper">
                                        {skinSmallArr}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="margin">
                        <div className="main-left">
                            <h3>背景故事</h3>
                            <div className="background-story">
                                <p>{this.state.heroDetail.lore}</p>
                            </div>
                            <h3>技能介绍</h3>
                            <div className="cd-img">
                                <div className="img">
                                    <ul>
                                        {skillArr}
                                    </ul>
                                </div>
                                <div className="cd-detail">
                                    <h4>瓦斯塔亚的优雅<span>被动技能</span></h4>
                                    <p>每当阿狸在短时间内对一个英雄造成了2次技能命中，她就会暂时获得移动速度加成。</p>
                                </div>
                            </div>
                            <h3>推荐装备</h3>
                            <div className="equipment">
                                <div className="equipment-li active">召唤师峡谷</div>
                                <div className="equipment-li">极地大乱斗</div>
                                <span>起始装备</span>
                                <p>
                                    <img src="https://ossweb-img.qq.com/images/lol/img/item/1056.png"/>
                                    <img src="https://ossweb-img.qq.com/images/lol/img/item/1056.png"/>
                                    <img src="https://ossweb-img.qq.com/images/lol/img/item/1056.png"/>
                                </p>
                                <span>核心装备</span>
                                <p>
                                    <img src="https://ossweb-img.qq.com/images/lol/img/item/3285.png"/>
                                    <img src="https://ossweb-img.qq.com/images/lol/img/item/3285.png"/>
                                    <img src="https://ossweb-img.qq.com/images/lol/img/item/3285.png"/>
                                </p>
                            </div>
                            <h3>使用技巧</h3>
                            <div className="use-skill">
                                <div className="top">
                                    <p className="a-1">当你使用九尾妖狐</p>
                                    <p>- 用【魅惑妖术】来启动你的连招，它将会使【欺诈宝珠】和【妖异狐火】更容易命中敌人。</p>
                                    <p>- 在团战中用魅惑妖术先手，并用【灵魄突袭】追击落单的敌人。</p>
                                    <p>-
                                        【灵魄突袭】能够为阿狸的其它技能创造机会，它可以为【魅惑妖术】清出一条路，有助于让【欺诈宝珠】来回命中敌人两次，并且突进到敌人身边可以让【妖异狐火】更易选中目标。</p>
                                </div>
                                <div className="bottom">
                                    <p className="a-1">敌人使用九尾妖狐</p>
                                    <p>- 在终极技能【灵魄突袭】进入冷却阶段后，阿狸的生存能力可谓低得令人发指。</p>
                                    <p>- 呆在小兵后面，来让【魅惑妖术】难以命中，能够显著地降低阿狸潜在的爆发伤害。</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-right">
                            <h3>我的记录</h3>
                            <div className="my-record">
                                <p>您无法查看使用该英雄的记录，请<a>[登陆]</a>，并绑定所在大区。</p>
                            </div>
                            <h4>推荐攻略</h4>
                            <div className="strategy">
                                <ul>
                                    <li>
                                        <p className="a-1">
                                            <span className="b-1"><img src="images/record-1.jpg"/>新版本T1中单阿狸玩法攻略</span>
                                            <span className="b-2">来源:玩家投稿</span>
                                        </p>
                                        <p className="a-2">
                                            <span className="b-1">2017-06-17</span>
                                            <span className="b-2">评分:<a><i></i></a></span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default HeroDetail