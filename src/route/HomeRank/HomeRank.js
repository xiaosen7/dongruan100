import React from 'react';
import '../../static/css/homeRank/homeRank.less';
import {withRouter} from 'react-router-dom';
class HomeRank extends React.Component{
  render() {
    return <section className='homeRankBox' onClick={()=>{
     this.props.history.goBack();
    }}>
      <img alt='装饰' src={require('../../static/img/homeRank/decoration.png')}  className="decoration"/>
      <div className="rank">
        <ul className='timeModeRankList'>
          <li className='rankList-item'>
            <img alt='头像' src={require('../../static/img/user/1.jpg')} />
            <span>No1. 答对39题</span>
          </li>
          <li className='rankList-item'>
            <img alt='头像' src={require('../../static/img/user/2.jpeg')} />
            <span>No2. 答对36题</span>
          </li>
          <li className='rankList-item'>
            <img alt='头像' src={require('../../static/img/user/3.jpg')} />
            <span>No3. 答对35题</span>
          </li>
        </ul>
        <ul className='surviveModeRankList'>
          <li className='rankList-item'>
            <img alt='头像' src={require('../../static/img/user/1.jpg')} />
            No1. 答对39题
          </li>
          <li className='rankList-item'>
            <img alt='头像' src={require('../../static/img/user/2.jpeg')}/>
            <span>No2. 答对36题</span>
          </li>
          <li className='rankList-item'>
            <img alt='头像' src={require('../../static/img/user/3.jpg')} />
            <span>No3. 答对35题</span>
          </li>
        </ul>
      </div>

    </section>;
  }
}
export default withRouter(HomeRank);
