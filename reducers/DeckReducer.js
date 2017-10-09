import {
  LOAD_DECKS,
  ADD_DECK,
  ADD_CARD
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
        case ADD_CARD:

          const arrQuestions = state['allDecks'][action.title]['questions'];
          arrQuestions.push(action.card);

          return { ...state,
            allDecks: {
              ...state['allDecks'],
              [action.title]: {
                ...state['allDecks'][action.title],
                questions: arrQuestions
              }
            }
          };
      default:
        return state;
    }
  }
