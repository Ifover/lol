import React, {Component} from 'react'

import Header from '@/Components/Home/Header/Header.jsx'
import Banner from '@/Components/Home/Banner/Banner'
import Content from '@/Components/Home/Content/Content'
import Footer from '@/Components/Home/Footer/Footer'

class Home extends Component {
    render() {
        return (
            <div id='box'>
                <Header />
                <Banner />
                <Content />
                <Footer />
            </div>
        )
    }

}

export default Home