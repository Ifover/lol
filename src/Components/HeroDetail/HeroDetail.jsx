import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './style.scss'
import {Icon} from 'antd'


import Header from '@/Components/Index/Header/Header'
import Footer from '@/Components/Index/Footer/Footer'
import Equipment from './Equipment/Equipment'
import Strategy from './Strategy/Strategy'

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
            // console.log(data.data.data);
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
        let blocks = [];
        let uUse = []
        let aUse = []

        let hero_Detail = {
            name: this.state.heroDetail.name,
            title: this.state.heroDetail.title,
            tags: []
        }


        if (this.state.success) {
            uUse.push(
                <div className="top" key={'allytips'}>
                    <p className="a-1">当你使用{hero_Detail.name}</p>
                    {
                        this.state.heroDetail.allytips.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })
                    }
                </div>
            )
            aUse.push(
                <div className="bottom" key={'enemytips'}>
                    <p className="a-1">敌人使用{hero_Detail.name}</p>
                    {
                        this.state.heroDetail.enemytips.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })
                    }                </div>
            )
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

            blocks = this.state.heroDetail.blocks

        }

        return (
            <div id='box'>
                <Header/>
                <div className="title">
                    <div className="margin">
                        <div>
                            <span><Icon type="home" theme="filled" /></span>
                            <Link to='//lol.ifover.com'>英雄联盟首页</Link>
                            <span><Icon type="right" /></span>
                            <a>游戏资料</a>
                            <span><Icon type="right" /></span>
                            <a>全部英雄</a>
                            <span><Icon type="right" /></span>
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
                            <Equipment blocks={blocks}/>
                            <h3>使用技巧</h3>
                            <div className="use-skill">
                                {uUse}
                                {aUse}
                            </div>
                        </div>
                        <div className="main-right">
                            <h3>我的记录</h3>
                            <div className="my-record">
                                <p>您无法查看使用该英雄的记录，请<a>[登陆]</a>，并绑定所在大区。</p>
                            </div>
                            <h3>推荐攻略</h3>
                            <Strategy/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )


    }

}


export default HeroDetail