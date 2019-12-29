import React from 'react';
import {connect} from 'react-redux';
import '../../static/css/homeRank/homeRank.less';
import {withRouter} from 'react-router-dom';
class HomeRank extends React.Component{

  constructor(props){
    super(props);
  }
  render() {
    return <section className='homeRankBox' onClick={()=>{
     this.props.history.goBack();
    }}>
      <img src={require('../../static/img/homeRank/decoration.png')}  className="decoration"/>
      <div className="rank">
        <ul className='timeModeRankList'>
          <li className='rankList-item'>
            <img src={require('../../static/img/user/1.jpg')} alt=""/>
            <span>No1. 答对39题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../../static/img/user/2.jpeg')} alt=""/>
            <span>No2. 答对36题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../../static/img/user/3.jpg')} alt=""/>
            <span>No3. 答对35题</span>
          </li>
        </ul>
        <ul className='surviveModeRankList'>
          <li className='rankList-item'>
            <img src={require('../../static/img/user/1.jpg')} alt=""/>
            No1. 答对39题
          </li>
          <li className='rankList-item'>
            <img src={require('../../static/img/user/2.jpeg')} alt=""/>
            <span>No2. 答对36题</span>
          </li>
          <li className='rankList-item'>
            <img src={require('../../static/img/user/3.jpg')} alt=""/>
            <span>No3. 答对35题</span>
          </li>
        </ul>
      </div>

    </section>;
  }
}
export default withRouter(HomeRank);
