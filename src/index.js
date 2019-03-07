import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Index from '@/Pages/Index/Index'
import Index_HeroDetail from '@/Pages/HeroDetail/Index'
import News from '@/Pages/News/News'
import Home from '@/Pages/Home'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/home' component={ Home }/>
            <Route path='/news' component={News}/>
            <Route path='/info-detail/:id' component={Index_HeroDetail}/>
            <Route path='/' component={Index}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();