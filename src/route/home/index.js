import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/home/home.less';

export default class Home extends Component {
  render() {
    return (
        <div className='homeBox'>
          <section className="header">
           {/* <img src={require('../../static/img/home/logo.png')} alt="东软100问！！"/>*/}
          </section>
          <section className="footer">
            <img src={require("../../static/img/home/running_man.gif")} alt="奔跑吧~"/>
          </section>
          <section className="body">
            <Link to='/timeMode'><img src={require("../../static/img/home/time_mode.png")} alt="计时模式"/></Link>
            <Link to='/surviveMode'><img src={require("../../static/img/home/survive_mode.png")} alt="生存模式"/></Link>
            <Link to='/rule'><img src={require("../../static/img/home/rule.png")} alt="游戏规则"/></Link>
            <Link to='/homeRank'><img src={require("../../static/img/home/view-ranking.png")} alt="查看排行"/></Link>
          </section>
        </div>
    );
  }
}