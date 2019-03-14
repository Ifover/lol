import React, {Component} from 'react'

import Header from '@/Components/Index/Header/Header';
import Footer from '@/Components/Index/Footer/Footer';

import Content from '@/Components/InfoHouse/Content/Content';
import './style.scss'

class InfoHouse extends Component {


    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}

export default InfoHouse