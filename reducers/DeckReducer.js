import {
  LOAD_DECKS
} from '../actions/types';

const INITIAL_STATE = {
  allDecks: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOAD_DECKS:
        return { ...state,
          allDecks: action.decks
        };
      default:
        return state;
      }
};
