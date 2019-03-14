import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import './style.scss'
import ajax from '@/api/axios';
import img_blank from '@/static/images/blank.gif'


class VideoAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            day: new Date().getDay(),
            type: '',
            realMap: [],
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
            videos: {
                "0": [],
                "1270": [],
                "1254": [],
                "1260": [],
                "1265": []
            },
            realAlbumsNum: 0
        }
    }

    reGetList = (value) => {
        // console.log(value, this);
        this.setState({
            realMap: []
        });
        switch (value) {
            case 0:
                this.setState({
                    realMap: this.state.videos['0']
                })
            case 1270:
            case 1254:
            case 1260:
            case 1265:
                this.setState({
                    index: value
                })
                if (this.state.videos[value].length > 0) {
                    this.setState({
                        realMap: this.state.videos[value]
                    })
                } else {
                    ajax.get('/v1/video/album', {
                        params: {
                            id: value,
                            page: 1,
                            pagesize: 8
                        }
                    }).then(data => {
                        // console.log(data.data);
                        let videos = this.state.videos
                        videos[value] = data.data.msg.result,
                            this.setState({
                                videos,
                                realMap: data.data.msg.result
                            })
                    });

                }
                break;
            default:
                break;
        }
    }

    reGetAlbums = (value) => {
        this.setState({
            day: value,
            albums: []
        });

        ajax.get('/v1/hot_album', {
            params: {
                collectionid: this.state.albumsID[value],
            }
        }).then(data => {
            // console.log(data.data.data.result);
            this.setState({
                albums: data.data
            })
        })

        // console.log(this.state.day);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        window.Echo.init({
            offset: 100,
            throttle: 0
        })
    }

    componentWillMount() {
        //最新视频
        ajax.get('/v1/video/rec').then(data => {
            // console.log(data.data);
            let videos = this.state.videos;
            videos['0'] = data.data.result
            this.setState({
                videos,
                realMap: data.data.result
            })
        });

        //热门专辑
        ajax.get('/v1/hot_album', {
            params: {
                collectionid: '55,79,211,39',
            }
        }).then(data => {
            // console.log(data.data.data.result);
            this.setState({
                albums: data.data,
                realAlbums: data.data.slice(0, 3)
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
        this.state.realMap.map((item, index) => {
            // console.log(item);
            htmlArr.push(
                <li key={index}>
                    <Link to={'/videodetail/' + item.iDocID} target='__ablank'>
                        <div className='imgbox'>
                            <img src={img_blank} data-echo={item.sIMG.indexOf('http') === -1 ? 'http:' + item.sIMG : item.sIMG} alt=""/>
                            <span className='time'>{item.iTime}</span>
                        </div>
                        <p>{item.sTitle}</p>
                        <div className='count'>
                            <span>{item.iTotalPlay}次播放</span><span>{item.sCreated.substr(0, 10)}</span>
                        </div>
                    </Link>
                </li>
            )
            return null
        });

        let albumsArr = []
        this.state.albums.slice(0, 3).map((item, index) => {
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
            <div className='layoutViedeo'>
                <div className='video-album'>
                    <div className='box_left'>
                        <div className='titleAlbum'>
                            <h2>最新视频</h2>
                            <div className='title-right'>
                                <ul>
                                    <li className={this.state.index === 0 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 0)}>推荐</a>
                                    </li>
                                    <li className={this.state.index === 1270 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1270)}>官方</a>
                                    </li>
                                    <li className={this.state.index === 1254 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1254)}>娱乐</a>
                                    </li>
                                    <li className={this.state.index === 1260 ? 'active' : ''}>
                                        <a href='javascript:;' onClick={this.reGetList.bind(this, 1260)}>赛事</a>
                                    </li>
                                    <li className={this.state.index === 1265 ? 'active' : ''}>
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
                        <div className='titleAlbum'>
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
                        </div>
                        <a className="more-hotprogram" href="//lol.qq.com/v/v2/index.shtml" title="前往视频中心">前往视频中心</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default VideoAlbum
