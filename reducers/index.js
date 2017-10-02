import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import QuizReducer from './QuizReducer';

export default combineReducers({
  decks: DeckReducer,
  quiz: QuizReducer,
});
