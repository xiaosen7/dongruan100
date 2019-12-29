import React from 'react';
import QuestionItem from "../../component/QuestionItem";
import '../../static/css/timeMode/timeMode.less';
export default class TimeMode extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className='timeMode'>
      <QuestionItem/>
    </div>;
  }
}
