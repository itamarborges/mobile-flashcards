import { LOAD_DECKS } from './types';
import * as DecksAPI from '../utils/api';

export const loadAllDecks = (dispatch) => {
  return (dispatch) => {
    DecksAPI.getDecks()
    .then(decks => {
      loadDecks(dispatch, decks);
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

const loadDecks = (dispatch, decks) => {
  dispatch({
    type: LOAD_DECKS,
    decks
  });
}
