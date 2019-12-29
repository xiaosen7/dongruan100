import React from 'react';
import {connect} from 'react-redux';
import '../static/css/result/result.less';
import {Link} from 'react-router-dom';
import action from '../store/action'
class Result extends React.Component{
  constructor(props){
    super(props);
  }
componentWillMount() {
    this.props.updateRecord();
}

  render() {
    let {mode,right} =this.props.game;
    return <div className="resultBox">
      <div className="top">
        <img src={require('../static/img/result/bg-top.png')} />
        <img src={require('../static/img/result/content-game-over.png')} />
        <img src={require('../static/img/result/content-answer.png')} />
        <span className='count'>{right}</span>
      </div>
     <div className="bottom">
       <Link to={`/${mode}`}><img src={require('../static/img/result/result-btn-restart.png')} /></Link>
       <Link to='/home'><img src={require('../static/img/result/result-btn-home.png')}/></Link>
       <Link to={''}><img src={require('../static/img/result/result-btn-shareResult.png')}/></Link>
       <Link to={{
         pathname:'/rank',
       }
       }><img src={require('../static/img/result/result-btn-rankingList.png')}/></Link>
     </div>
    </div>;
  }
}
export default connect(state=>state.question,action.question)(Result);
