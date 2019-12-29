import * as TYPE from '../action_type';
export default {
  initGame(mode) {
    return{
      type:TYPE.INIT_GAME,
      mode
    }
  },
  answerRight(){
    return{
      type:TYPE.ANSWER_RIGHT
    }
  },
  answerWrong(){
    return{
      type:TYPE.ANSWER_WRONG
    }
  },
  updateRecord(){
    return {
      type:TYPE.UPDATE_RECORD,
    }
  }
}