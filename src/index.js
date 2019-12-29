import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,Redirect, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/index';
import initReactFastclick  from 'react-fastclick';
//css
import './static/css/common/reset.min.css';
import './static/css/common/animate.css';

//component
import Result from "./component/Result";
import Home from "./route/home";
import TimeMode from "./route/timeMode";
import SurviveMode from "./route/surviveMode";
import Rule from "./route/rule";
import Rank from "./component/Rank";
import HomeRank from "./route/HomeRank/HomeRank";
initReactFastclick();
ReactDOM.render(
    <Provider store={store}>
      <HashRouter >
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/timeMode' exact component={TimeMode}/>
        <Route path='/surviveMode' exact component={SurviveMode}/>
        <Route path='/rule' exact component={Rule}/>
        <Route path='/HomeRank' component={HomeRank}/>
        <Route path='/result' component={Result}/>
        <Route path='/rank' component={Rank}/>
        <Redirect to='/home'/>
      </Switch>
    </HashRouter>
    </Provider>

,document.getElementById('root'));
