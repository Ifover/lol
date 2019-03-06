import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'

import './style.scss'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            banner: []
        })
    }

    componentDidMount() {
        axios.get('/v1/banner').then(data => {
            this.setState({
                banner: data.data.data
            });
            console.log(data.data.data);
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            // spaceBetween: 10,
            slidesPerView: 5,
            // loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            // spaceBetween: 10,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });


    }

    render() {
        let arr = [];
        let arrs = [];

        this.state.banner.map((item, index) => {
            arr.push(
                <div className="swiper-slide" key={index}>
                    <img src={item.imgUrl} alt=""/>
                </div>
            )
            arrs.push(
                <div className="swiper-slide" key={index}>
                    {item.fName}
                </div>
            )
        });
        // console.log(arrs);
        return (
            <div className='box'>
                <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                        {arr}
                    </div>
                </div>
                <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                        {arrs}
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner