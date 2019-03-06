import React, {Component} from 'react'

import VideoAlbum from '@/Components/Index/VideoAlbum/VideoAlbum'
import EventCenter from '@/Components/Index/EventCenter/EventCenter'
import Banner from '@/Components/Index/Banner/Banner'
import HeroInfo from '@/Components/Index/HeroInfo/HeroInfo'

class Index extends Component {
    render() {
        return (
            <div id='box'>
                <HeroInfo/>
            </div>
        )
    }

}

export default Index