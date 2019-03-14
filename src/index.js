import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Index from '@/Pages/Index/Index'
import Index_HeroDetail from '@/Pages/HeroDetail/Index'
import News from '@/Pages/News/News'
import FANART from '@/Pages/FANART/FANART'
import FanArtDetail from '@/Pages/FanArtDetail/FanArtDetail'
import VideoDetail from '@/Pages/VideoDetail/VideoDetail'
import InfoHouse from '@/Pages/InfoHouse/InfoHouse'

// const Index = React.lazy(() => {import('@/Pages/Index/Index')});

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/infohouse/' component={InfoHouse}/>
            <Route path='/videodetail/:id' component={VideoDetail}/>
            <Route path='/fanart' component={FANART}/>
            <Route path='/news' component={News}/>
            <Route path='/info-detail/:id' component={Index_HeroDetail}/>
            <Route path='/fanart_detail/:id' component={FanArtDetail}/>
            <Route path='/' component={Index}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();