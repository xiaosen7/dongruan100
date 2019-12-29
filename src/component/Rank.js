import React from 'react';
import {connect} from 'react-redux';
import '../static/css/rank/rank.less';
class Rank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {mode} = this.props.game;
    return <section className='rankBox'>
      <header className='header' onClick={this.onTap}>
        <a href="javascript:;" className='toBack'><img className='back' src={require('../static/img/rank/back.-btn-bg.png')}/></a>
        <a href="javascript:;" className='toShare'><img className='share' src={require('../static/img/rank/share-btn-bg.png')}/></a>
        {mode=='timeMode'?<img className='title' src={require('../static/img/rank/celebrateTime.png')}/>:null}
        {mode=='surviveMode'?<img className='title' src={require('../static/img/rank/celebrateSurvive.png')}/>:null}
        {mode=='timeMode'?<span className={`total ${mode.substr(0,1)}`}>{this.props[`${mode}Record`].total}</span>:null}
        <span className={`right ${mode.substr(0,1)}`}>{this.props[`${mode}Record`].right}</span>
        <span className={`rank ${mode.substr(0,1)}`}>98</span>
      </header>

      <div className="rankList">
        {mode=='timeMode'?<img className='rankTitle' src={require('../static/img/rank/timeModeTitle.png')}/>:null}
        {mode=='surviveMode'?<img className='rankTitle' src={require('../static/img/rank/surviveModeTitle.png')}/>:null}
        <img src={require('../static/img/rank/decoration.png')} className='decoration' />

        <ul >
          <li className='rankList-item'>
            <img src={require('../static/img/user/1.jpg')} alt=""/>
            <span>No1. 答对39题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../static/img/user/2.jpeg')} alt=""/>
            <span>No2. 答对36题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../static/img/user/3.jpg')} alt=""/>
            <span>No3. 答对35题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../static/img/user/4.jpg')} alt=""/>
            <span>No4. 答对33题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../static/img/user/5.jpeg')} alt=""/>
            <span>No5. 答对28题</span>
          </li>
        </ul>
      </div>
    </section>;
  }
  onTap=e=>{
    let target=e.target,
        tagName=target.tagName,
    className=target.className;
    if(className=='toBack'){
      setTimeout(()=>{
        this.props.history.go(-1);
      },100);

    }
  }
}

export default connect(state => state.question)(Rank);
