import React, {Component} from 'react';
import {Switch, Link, NavLink, Route, Router} from 'react-router-dom'
import './style.scss'

import Header from '@/Components/FANART/Header/Header'
import Banner from '@/Components/FANART/Banner/Banner'

import Home from '@/Components/FANART/Route/Content/Content'
import Rank from '@/Components/FANART/Route/Rank/Rank'
import Author from '@/Components/FANART/Route/Author/Author'

import Footer from '@/Components/FANART/Footer/Footer'

class FANART extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Switch>
                    <Route path='/fanart/home' component={Home}/>
                    <Route path='/fanart/rank' component={Rank}/>
                    <Route path='/fanart/author' component={Author}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}


export default FANART