import React, {Component} from 'react';
import '../../static/css/rule/rule.less';
import  {Link} from 'react-router-dom';

export default class Rule extends Component {
  render() {
    return (
        <div className='ruleBox'>
          <Link to='/home' className='back'>
            <img className='back-bg' src={require('../../static/img/rule/back.png')} alt="返回"/>
          </Link>
          <img src={require('../../static/img/rule/rule-title.png')} alt="游戏规则"/>
          <img src={require('../../static/img/rule/rule.png')} alt="游戏规则"/>
          <img src={require('../../static/img/rule/decoration.png')} alt="小物件"/>
          <img src={require('../../static/img/home/running_man.gif')} alt="奔跑吧~"/>
        </div>
    );
  }
}