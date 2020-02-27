import React from 'react';
import { connect } from 'react-redux';
import '../static/css/rank/rank.less';
class Rank extends React.Component {

  render() {
    let { mode } = this.props.game;
    return <section className='rankBox'>
      <header className='header' onClick={this.onTap}>
        <a onClick={e => e.preventDefault()} href="###" className='toBack'><img alt="生存模式" className='返回' src={require('../static/img/rank/back.-btn-bg.png')} /></a>
        <a onClick={e => e.preventDefault()} href="###" className='toShare'><img alt="生存模式" className='分享' src={require('../static/img/rank/share-btn-bg.png')} /></a>
        {mode === 'timeMode' ? <img alt="时间模式" className='title' src={require('../static/img/rank/celebrateTime.png')} /> : null}
        {mode === 'surviveMode' ? <img alt="生存模式" className='title' src={require('../static/img/rank/celebrateSurvive.png')} /> : null}
        {mode === 'timeMode' ? <span className={`total ${mode.substr(0, 1)}`}>{this.props[`${mode}Record`].total}</span> : null}
        <span className={`right ${mode.substr(0, 1)}`}>{this.props[`${mode}Record`].right}</span>
        <span className={`rank ${mode.substr(0, 1)}`}>98</span>
      </header>

      <div className="rankList">
        {mode === 'timeMode' ? <img alt="时间模式排行榜" className='rankTitle' src={require('../static/img/rank/timeModeTitle.png')} /> : null}
        {mode === 'surviveMode' ? <img alt="生存模式排行榜" className='rankTitle' src={require('../static/img/rank/surviveModeTitle.png')} /> : null}
        <img alt="装饰" src={require('../static/img/rank/decoration.png')} className='decoration' />
        <ul >
          <li className='rankList-item'>
            <img alt="头像" src={require('../static/img/user/1.jpg')} />
            <span>No1. 答对39题</span>
          </li>
          <li className='rankList-item'>
            <img alt="头像" src={require('../static/img/user/2.jpeg')} />
            <span>No2. 答对36题</span>
          </li>
          <li className='rankList-item'>
            <img alt="头像" src={require('../static/img/user/3.jpg')} />
            <span>No3. 答对35题</span>
          </li>
          <li className='rankList-item'>
            <img alt="头像" src={require('../static/img/user/4.jpg')} />
            <span>No4. 答对33题</span>
          </li>
          <li className='rankList-item'>
            <img alt="头像" src={require('../static/img/user/5.jpeg')} />
            <span>No5. 答对28题</span>
          </li>
        </ul>
      </div>
    </section>;
  }
  onTap = e => {
    let target = e.target,
      className = target.className;
    if (className === 'toBack') {
      setTimeout(() => {
        this.props.history.go(-1);
      }, 100);

    }
  }
}

export default connect(state => state.question)(Rank);
