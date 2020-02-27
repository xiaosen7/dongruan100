import * as TYPE from '../action_type';
import questions from '../../data/questions';

const INIT_STATE = {
  questions,
  game: {
    right: 0,
    total: 0,
    mode: 'timeMode'
  },
  timeModeRecord: {
    right: 0,
    total: 0
  },
  surviveModeRecord: {
    right: 0,
    total: 0
  }
};
export default function (state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state));
  let { right, total, mode } = state.game;
  switch (action.type) {
    case TYPE.INIT_GAME:
      state.game = {
        right: 0,
        total: 0,
        mode: action.mode
      };
      break;
    case TYPE.ANSWER_RIGHT:
      state.game.right = right + 1;
      state.game.total = total + 1;
      break;
    case TYPE.ANSWER_WRONG:
      state.game.total = total + 1;
      break;
    case TYPE.UPDATE_RECORD:
      let score = state[`${mode}Record`].right;
      if (right > score) {
        state[`${mode}Record`].right = right;
        state[`${mode}Record`].total = total;
      }
      break;
    default:
      break;
  }
  return state;
}