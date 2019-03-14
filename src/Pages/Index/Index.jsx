import React, {Component} from 'react';
// import Loadable from 'react-loadable'
import './style.scss'
// import LoadingComponent from '@/Components/LoadingComponent'

import Header from '@/Components/Index/Header/Header'
import Banner from '@/Components/Index/Banner/Banner'
// const Banner = lazy(() => import('@/Components/Index/Banner/Banner'))
// const Mnews = lazy(() => import('@/Components/Index/Mnews/Mnews'))
import Mnews from '@/Components/Index/Mnews/Mnews'
import PopularActivties from '@/Components/Index/PopularActivities/PopularActivities'

import VideoAlbum from '@/Components/Index/VideoAlbum/VideoAlbum'
// const VideoAlbum = lazy(() => import('@/Components/Index/VideoAlbum/VideoAlbum'))

import EventCenter from '@/Components/Index/EventCenter/EventCenter'
// const EventCenter = lazy(() => import('@/Components/Index/EventCenter/EventCenter'))

import HeroInfo from '@/Components/Index/HeroInfo/HeroInfo'
// const HeroInfo = Loadable({
//     loader: () => import('@/Components/Index/HeroInfo/HeroInfo'),
//     loading: LoadingComponent
// })

import FanArt from '@/Components/Index/FanArt/FanArt'
// const FanArt = lazy(() => import('@/Components/Index/FanArt/FanArt'))

import Footer from '@/Components/Index/Footer/Footer'

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // let HeroInfo = require('@/Components/Index/HeroInfo/HeroInfo')
        return (
            <div>
                <div id='header'>
                    <Header/>
                    <div id='bannerNews'>
                        <div className="layout">
                            <Banner/>
                            <Mnews/>
                        </div>
                    </div>
                    <PopularActivties/>
                </div>
                <div id='scroll-body'>
                    <VideoAlbum/>
                    <EventCenter/>
                    <HeroInfo/>
                    <FanArt/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Index