import React, {Component} from 'react';
import '../static/css/common/questionItem.less';
import {connect} from 'react-redux';
import action from '../store/action';
import animations from '../data/animations';
import {withRouter} from 'react-router-dom';
const animationCount = animations.length - 1,
    styles={
      question: [{
        left: '.81rem',
        top: '7.28rem'
      }, {
        left: '3.77rem',
        top: '7.28rem'
      },
        {
          left: '.81rem',
          top: '8.62rem'
        }, {
          left: '3.77rem',
          top: '8.62rem'
        }, {
          left: '2.28rem',
          top: '8.62rem'
        }],
      select: [{
        left: '.99rem',
        top: '7.28rem'
      }, {
        left: '3.95rem',
        top: '7.28rem'
      }, {
        left: '.95rem',
        top: '8.62rem'
      }, {
        left: '3.95rem',
        top: '8.62rem'
      }, {
        left: '2.46rem',
        top: '8.62rem'
      }]
    },
    ABCD = ['A', 'B', 'C', 'D'];
let getRandom = (a, b) => {
  return Math.round(Math.random() * (b - a) + a);
}

class QuestionItem extends Component {
  constructor(props) {
    super(props);
    this.questions = this.setUpQuestions();
    this.state = {
      index: 0,
    };
    this.mode=window.location.hash.substr(2);
    this.props.initGame(this.mode);
  }
  componentDidMount() {
    switch (this.mode) {
      case 'timeMode':
        if(!this.refs.count) return;
        this.refs.count.innerHTML = 60;
        this.countTimer = setInterval(() => {
          if (this.refs.count.innerHTML == 0) {
            clearInterval(this.countTimer);
            this.props.history.replace({
              pathname : '/result' ,
            });
            return;
          }
          this.refs.count.innerHTML--;
        }, 1000);
        break;
      case 'surviveMode':
        this.refs.count.innerHTML = 0;
        break;
    }
  }
  componentWillUnmount() {
    clearInterval(this.Timer);
  }
  setUpQuestions = () => {
    let questions = this.props.questions,
        len = questions.length,
        result = [];
    questions.forEach(((item, index) => {
      let random = getRandom(0, len - 1);
      while (index == random) {
        random = getRandom(0, len - 1);
      }
      result[index] = questions[random];
      result[random] = questions[index];
    }));
    return result;
  }
  render() {
    this.isSelect = false;

    let a1 = animations[getRandom(0, animationCount)],
        a2 = animations[getRandom(0, animationCount)],
        a3 = animations[getRandom(0, animationCount)],
        a4 = animations[getRandom(0, animationCount)],
        a5 = animations[getRandom(0, animationCount)];

    let {answersLen, pic} = this.questions[this.state.index],
        {A, B, C, D, question} = pic,
        picAry = [A, B, C, D];
    return (
        <div className='questionItem' onClick={this.onSelect}>
          <audio ref={'music'} className="music" src={require('../static/audio/bg.mp3')} autoPlay={true} preload="load" loop type="audio/mp3"></audio>
          <img className='time-border' src={require('../static/img/question/time-border.png')}/>
          <span className='count' ref="count">0</span>
          <a href="javascript:;" onClick={this.pause} className="controlMusic">
            <img src={require('../static/img/question/sun.png')} ref={'sun'} />
          </a>
          <img style={{animation: `${a1} 1s`}} src={require('../static/img/question/building.png')}/>
          <img style={{animation: `${a2} 1s`}} src={require('../static/img/question/question-border.png')}/>
          <img style={{animation: `${a3} 1s`}} src={require(`../static/${question}`)}/>
          <img style={{animation: `${a4} 1s`}} src={require('../static/img/question/decoration.png')}/>
          {/* <img src={require(`../static/${A}`)}/>
          <img src={require(`../static/${B}`)}/>
          {answerLen==3?<img style={{'left': '2.46rem','top':'8.62rem'}} src={require(`../static/${C}`)}/>:null}
          {answerLen==3?(`<img style="left: 2.46rem;top:8.62rem" src={require(../static/${C})}/>
          ` ):null}
          <img src={require(`../static/${C}`)}/>*/}
          {picAry.map((item, index) => {
            if (item) {
              if (index == 2 && answersLen == 3) {
                return <img data-pic={ABCD[index]} style={{...styles.question[4], animation: `${a5} 1s`}}
                            src={require(`../static/${item}`)}
                            key={index}/>
              }
              return <img data-pic={ABCD[index]} style={{...styles.question[index], animation: `${a5} 1s`}}
                          src={require(`../static/${item}`)}
                          key={index}/>
            }
          })}
          {picAry.map((item, index) => {
            if (item) {
              if (index == 2 && answersLen == 3) {
                return <div data-select={ABCD[index]} style={styles.select[4]} className="select"
                            key={index}></div>
              }
              return <div data-select={ABCD[index]} style={styles.select[index]} className="select"
                          key={index}></div>
            }
          })}
        </div>
    );
  }
  onSelect = e => {
    if (this.isSelect)return;

    let target = e.target,
        className = target.className;

    if (className === 'select') {

      this.isSelect = true;
      let {mode}=this.props.game,
          {index} = this.state,
          {key} = this.questions[index],
          select = target.getAttribute('data-select'),
          pic = document.querySelector(`img[data-pic=${select}]`);
      pic.style.animation = `bounce 1s`;

      if (key == select) {
        //选对
        setTimeout(()=>{
          this.props.answerRight();
        },1000);
        target.className += ' right';
        this.Timer=setTimeout(() => {
          pic.style.animation = '';
          target.className = 'select';
          this.setState({
            index: index + 1,
          });
        }, 1000);

        switch (mode) {
          case 'timeMode':
            break;
          case 'surviveMode':
            this.refs.count.innerHTML++;
            break;
        }
      } else {
        //选错
        setTimeout(()=>{
          this.props.answerWrong();
        },1000);

        target.className += ' wrong';
        this.Timer=setTimeout(() => {
          pic.style.animation = '';
          target.className = 'select';
          this.setState({
            index: index + 1
          });
        }, 1000);
        switch (mode) {
          case 'timeMode':
            break;
          case 'surviveMode':
            setTimeout(()=>{
              this.props.history.replace({
                pathname : '/result' ,
              });
            },1000);
            break;
        }
      }
    }
  }
  pause=e=>{
    let {sun,music}=this.refs;
    if(music.paused){
      music.play();
      sun.style.animationPlayState='running';
    }else{
      music.pause();
      sun.style.animationPlayState='paused';
    }
  }
}

export default withRouter(connect(state => state.question, action.question)(QuestionItem))
