import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './style.scss'
import axios from 'axios';


class VideoAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            day: new Date().getDay(),
            type: '',
            list: [],
            albumsID: [
                '62,54,55,159,39,64',
                '69,74,96,67,55,62,39,63',
                '60,88,55,84,139,39',
                '166,157,155,100,152,129,162,94',
                '82,72,54,55,129,39',
                '155,152,157,162',
                '55,79,211,39'
            ],
            albums: [],
            realAlbums: [],
            realAlbumsNum: 0
        }
    }

    reGetList = (value) => {
        console.log(value, this);
        this.setState({
            list: []
        });
        switch (value) {
            case 1270:
            case 1254:
            case 1260:
            case 1265:
                this.setState({
                    id: value
                })
                axios.get('/v1/video/wmp', {
                    params: {
                        id: value,
                        page: 1,
                        pagesize: 8
                    }
                }).then(data => {
                    console.log(data.data);
                    this.setState({
                        list: data.data.msg.result
                    })
                });
                break;
            default:
                break
        }
    }

    reGetAlbums = (value) => {
        this.setState({
            day: value,
            albums: []
        });

        axios.get('/cmc/zmMcnCollectionList', {
            params: {
                collectionid: this.state.albumsID[value],
                source: 'web_pc'
            }
        }).then(data => {
            console.log(data.data.data.result);
            this.setState({
                albums: data.data.data.result
            })
        })

        // console.log(this.state.day);
    }

    reLoadSplice = (value) => {
        // console.log(value);
        // if (value === -1) {
        //     let len = this.state.albums.length;
        //     let realAlbumsNum =
        //     this.setState({
        //         realAlbums :
        //         realAlbumsNum:realAlbumsNum-1
        //     })
        //
        // }
    };

    componentWillMount() {
        //最新视频
        axios.get('/v1/video/album').then(data => {
            // console.log(data.data);
            this.setState({
                list: data.data.result
            })
        });
        //热门专辑
        axios.get('/cmc/zmMcnCollectionList', {
            params: {
                collectionid: '55,79,211,39',
                source: 'web_pc'
            }
        }).then(data => {
            // console.log(data.data.data.result);
            this.setState({
                albums: data.data.data.result,
                realAlbums: data.data.data.result.slice(0, 3)
            })
        })
    }

    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30
        });
    }

    render() {
        let htmlArr = [];
        this.state.list.map((item, index) => {
            // console.log(item);
            htmlArr.push(
                <li key={index}>
                    <div className='imgbox'>
                        <img src={item.sCoverList[item.sCoverList.length - 1].url} alt=""/>
                        <span className='time'>{item.iTime}</span>
                    </div>
                    <p><a href="/">{item.sTitle}</a></p>
                    <div className='count'><span>{item.iTotalPlay}次播放</span><span>{item.sCreated.substr(0, 10)}</span>
                    </div>
                </li>
            )
            return null
        });

        let albumsArr = []
        this.state.realAlbums.map((item, index) => {
            albumsArr.push(
                <div className='hotprogram-item' key={index}>
                    <img src={item.sIMG} alt={item.sDesc}/>
                    <h4>{item.sAuthor}</h4>
                    <p>{item.dtUpdateShow}更新</p>
                    <a className="name-progress" target="_blank" href='/'>{item.sDesc}</a>
                    <a className="author-program" title={item.sAuthor} href='/'>
                        <img src={item.avatar} width="30" height="30" alt={item.sAuthor}/>
                        {item.sAuthor}
                    </a>
                </div>
            )
            return null
        });
        return (
            <div className='layout'>
                <div className='video-album'>
                    <div className='box_left'>
                        <div className='title'>
                            <h2>最新视频</h2>
                            <div className='title-right'>
                                <ul>
                                    <li className={this.state.id === 0 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 0)}>推荐</a>
                                    </li>
                                    <li className={this.state.id === 1270 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1270)}>官方</a>
                                    </li>
                                    <li className={this.state.id === 1254 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1254)}>娱乐</a>
                                    </li>
                                    <li className={this.state.id === 1260 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1260)}>赛事</a>
                                    </li>
                                    <li className={this.state.id === 1265 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1265)}>教学</a>
                                    </li>
                                </ul>
                                <a href="/" className='more'>更多</a>
                            </div>
                        </div>
                        <ul className='video-item'>
                            {htmlArr}
                        </ul>
                    </div>
                    <div className="box_right">
                        <div className='title'>
                            <h2>热门专辑</h2>
                            <div className='title-right'>
                                <ul className='box_title_right'>
                                    <li className={this.state.day === 1 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 1)}>周一</a>
                                    </li>
                                    <li className={this.state.day === 2 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 2)}>周二</a>
                                    </li>
                                    <li className={this.state.day === 3 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 3)}>周三</a>
                                    </li>
                                    <li className={this.state.day === 4 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 4)}>周四</a>
                                    </li>
                                    <li className={this.state.day === 5 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 5)}>周五</a>
                                    </li>
                                    <li className={this.state.day === 6 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 6)}>周六</a>
                                    </li>
                                    <li className={this.state.day === 0 ? 'active' : ''}>
                                        <a href="javascript:;"
                                           onClick={this.reGetAlbums.bind(this, 0)}>周日</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='hotprogram-content'>
                            {albumsArr}
                            <a onClick={this.reLoadSplice.bind(this, -1)}
                               className="hotprogram-list hotprogram-list-left" href="javascript:" title="向左滚动"/>
                            <a onClick={this.reLoadSplice.bind(this, 1)}
                               className="hotprogram-list hotprogram-list-right" href="javascript:" title="向右滚动"/>
                        </div>
                        <a className="more-hotprogram" href="//lol.qq.com/v/v2/index.shtml" title="前往视频中心">前往视频中心</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default VideoAlbum
