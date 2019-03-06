import React, {Component} from 'react';
// import './style.css'

import {Carousel} from 'antd';

class Index extends Component {
    render() {
        return (
            <Carousel autoplay style={{width: '300px'}}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }

}

export default Index