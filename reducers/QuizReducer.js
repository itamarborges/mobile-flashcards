import {
  LOAD_DECKS
} from '../actions/types';

const INITIAL_STATE = {
  currentQuestion: null,
  rightAnswers: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
      }
};
