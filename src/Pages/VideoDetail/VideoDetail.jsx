import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import './style.scss'

import Header from '@/Components/VideoDetail/Header/Header'
import Video from '@/Components/VideoDetail/Video/Video'
import VideoRecommend from '@/Components/VideoDetail/VideoRecommend/VideoRecommend'
import VideoDayHot from '@/Components/VideoDetail/VideoDayHot/VideoDayHot'
import Footer from '@/Components/Index/Footer/Footer'

class VideoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id
        }

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            id: nextProps.match.params.id
        }, () => {
            nextProps.history.go(0)

        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Video id={this.state.id}/>
                <div className="videomargin">
                    <div className="main">
                        <VideoRecommend id={this.state.id}/>
                        <VideoDayHot/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default withRouter(VideoDetail)