import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import ajax from '@/api/axios'
import ImgLazy from '@/api/ImgLazy'

import './style.scss'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            banner: []
        })
    }

    componentDidMount() {
        ajax.get('/v1/banner').then(data => {
            this.setState({
                banner: data.data.data
            });
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        var bannerGalleryThumbs = new Swiper('#banner-swiper-thumbs', {
            // spaceBetween: 10,
            slidesPerView: 5,
            // loop: true,
            // noSwiping : true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var bannerGalleryTop = new Swiper('#banner-swiper-top', {
            // spaceBetween: 10,
            autoplay: {
                delay: 2000
            },
            loop: true,
            noSwiping: true,
            loopedSlides: 5, //looped slides should be the same
            thumbs: {
                swiper: bannerGalleryThumbs,
            },
        });


    }

    render() {
        let arr = [];
        let arrs = [];

        this.state.banner.map((item, index) => {
            arr.push(
                <div className="swiper-slide swiper-no-swiping" key={index}>
                    <img src={item.imgUrl}/>
                </div>
            );
            arrs.push(
                <div className="swiper-slide" key={index}>
                    {item.fName}
                </div>
            )
        });
        // console.log(arrs);
        return (
            <div className='banner'>
                <div className="swiper-container gallery-top" id='banner-swiper-top'>
                    <div className="swiper-wrapper">
                        {arr}
                    </div>
                </div>
                <div className="swiper-container gallery-thumbs" id='banner-swiper-thumbs'>
                    <div className="swiper-wrapper">
                        {arrs}
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner