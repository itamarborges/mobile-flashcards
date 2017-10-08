import {
  LOAD_DECKS,
  ADD_DECK
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
      case ADD_DECK:
        return { ...state,
          allDecks: {
            ...state['allDecks'],
            [action.deck.title]: action.deck
          }
        };
      default:
        return state;
    }
  }
