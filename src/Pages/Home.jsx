import React, {Component} from 'react'

import Header from '@/Components/Home/header/header'
import content from '@/Components/Home/content/content'
import footer from '@/Components/Home/footer/footer'

class Home extends Component {
    render() {
        return (
            <div id='box'>
                <header />
                <content />
                <footer />
            </div>
        )
    }

}

export default Home