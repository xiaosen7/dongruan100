import React from 'react';
import {connect} from 'react-redux';
import '../static/css/result/result.less';
import {Link} from 'react-router-dom';
import action from '../store/action'
class Result extends React.Component{

componentWillMount() {
    this.props.updateRecord();
}

  render() {
    let {mode,right} =this.props.game;
    return <div className="resultBox">
      <div className="top">
        <img alt="小装饰" src={require('../static/img/result/bg-top.png')} />
        <img alt="游戏结束" src={require('../static/img/result/content-game-over.png')} />
        <img alt="答对总数" src={require('../static/img/result/content-answer.png')} />
        <span className='count'>{right}</span>
      </div>
     <div className="bottom">
       <Link to={`/${mode}`}><img alt="重新开始" src={require('../static/img/result/result-btn-restart.png')} /></Link>
       <Link to='/home'><img alt="返回首页" src={require('../static/img/result/result-btn-home.png')}/></Link>
       <Link to={''}><img alt="分享成绩" src={require('../static/img/result/result-btn-shareResult.png')}/></Link>
       <Link to={'/rank'}><img alt="查看排名" src={require('../static/img/result/result-btn-rankingList.png')}/></Link>
     </div>
    </div>;
  }
}
export default connect(state=>state.question,action.question)(Result);
