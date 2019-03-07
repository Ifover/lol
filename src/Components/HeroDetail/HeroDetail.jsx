import React, {Component} from 'react';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './style.scss'


import Equipment from './Equipment/Equipment'

class HeroDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            skillIndex: 0,
            heroDetail: {},
            success: false,
            skinIndex: 0,
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
            slidesPerView: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,


        });
        let _this = this
        var galleryTop = new Swiper('.gallery-top', {
            loop: false,
            width: 1240,
            thumbs: {
                swiper: galleryThumbs,
            },
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            // on: {
            //     slideChangeTransitionEnd: function () {
            //         console.log(this.realIndex);
            //         _this.setState({
            //             skinIndex: this.realIndex
            //         })
            //     },
            // },

        });
    }

    fn_Change_Skill_Index(value) {
        this.setState({
            skillIndex: value
        })
        // console.log(value);
    }



    render() {
        let skillArr = [];
        let skinSmallArr = [];
        let skinBigArr = [];
        let skinNowName = '';
        let spell = [];
        let d4Info = [];
        let hero_Detail = {
            name: this.state.heroDetail.name,
            title: this.state.heroDetail.title,
            tags: []
        }


        if (this.state.success) {
            this.state.heroDetail.tags.map((item, index) => {
                hero_Detail.tags.push(
                    <span key={index}>{item}</span>
                )

            })
            skillArr.push(
                <li className={this.state.skillIndex === 0 ? 'active' : ''}
                    onClick={this.fn_Change_Skill_Index.bind(this, 0)} key={0}>
                    <img
                        src={"//ossweb-img.qq.com/images/lol/img/passive/" + this.state.heroDetail.passive.image.full}/>
                </li>
            )
            this.state.heroDetail.spells.map((item, index) => {
                //技能图标
                // console.log(index + 1);
                skillArr.push(
                    <li className={this.state.skillIndex === index + 1 ? 'active' : ''}
                        onClick={this.fn_Change_Skill_Index.bind(this, index + 1)}
                        key={index + 1}>
                        <img
                            src={"//ossweb-img.qq.com/images/lol/img/spell/" + item.image.full}/>
                    </li>
                )
            })

            skinNowName = this.state.heroDetail.skins[this.state.skinIndex].name;
            skinNowName = skinNowName === 'default' ? '默认皮肤' : skinNowName;
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

            switch (this.state.skillIndex) {
                case 0:
                    spell.push(
                        <div className="cd-detail" key={0}>
                            <h4>{this.state.heroDetail.passive.name}<span className='passive'>被动技能</span></h4>
                            <p dangerouslySetInnerHTML={{__html: this.state.heroDetail.passive.description}}></p>
                        </div>
                    )
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                    let skillWht = ''

                    switch (this.state.skillIndex) {
                        case 1:
                            skillWht = 'Q';
                            break;
                        case 2:
                            skillWht = 'W';
                            break;
                        case 3:
                            skillWht = 'E';
                            break;
                        case 4:
                            skillWht = 'R';
                            break;
                    }
                    let leveltip = []
                    this.state.heroDetail.spells[this.state.skillIndex - 1].leveltip.label.map((item, index) => {
                        // console.log(item);
                        leveltip.push(
                            <li key={index}>{`${item}：${this.state.heroDetail.spells[this.state.skillIndex - 1].leveltip.effect[index]}`}  </li>
                        )
                    })

                    spell.push(
                        <div className="cd-detail" key={0}>
                            <h4>{this.state.heroDetail.spells[this.state.skillIndex - 1].name}<span>快捷键：{skillWht}</span>
                            </h4>
                            <p dangerouslySetInnerHTML={{__html: this.state.heroDetail.spells[this.state.skillIndex - 1].tooltip}}></p>
                            <ul>
                                {leveltip}
                            </ul>
                        </div>
                    )
                    break;


            }
            d4Info.push(
                <ul key={0}>
                    <li title={this.state.heroDetail.info.attack}>
                        物理攻击
                        <a>
                            <i style={{background: '#f2c500', width: this.state.heroDetail.info.attack + '0%'}}></i>
                        </a>
                    </li>
                    <li title={this.state.heroDetail.info.magic}>
                        魔法攻击
                        <a>
                            <i style={{background: '#f59d00', width: this.state.heroDetail.info.magic + '0%'}}></i>
                        </a>
                    </li>
                    <li title={this.state.heroDetail.info.defense}>
                        防御能力
                        <a>
                            <i style={{background: '#2c97de', width: this.state.heroDetail.info.defense + '0%'}}></i>
                        </a>
                    </li>
                    <li title={this.state.heroDetail.info.difficulty}>
                        上手难度
                        <a>
                            <i style={{background: '#1eca6b', width: this.state.heroDetail.info.difficulty + '0%'}}></i>
                        </a>
                    </li>
                </ul>
            )
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
                            <a className="te">{hero_Detail.name} {hero_Detail.title}</a>
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
                                    <p className="a-1">{hero_Detail.name}</p>
                                    <p className="a-2"><b>{hero_Detail.title}</b></p>
                                    <p className="a-3">
                                        {hero_Detail.tags}
                                    </p>
                                    {d4Info}
                                    <a href='#' className='btn_buy'></a>
                                </div>
                            </div>
                            <div className="hero-skin">
                                <div className="top">
                                    <h3>{skinNowName}</h3>
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
                                {spell}
                            </div>
                            <h3>推荐装备</h3>
                            <Equipment></Equipment>
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