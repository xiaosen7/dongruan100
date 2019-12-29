import React, {Component} from 'react';
import QuestionItem from "../../component/QuestionItem";
import '../../static/css/surviveMode/surviveMode.less';
export default class SurviveMode extends Component {
  render() {
    return (
        <div className='surviveMode'>
          <QuestionItem/>
        </div>
    );
  }
}
