import { LOAD_DECKS } from './types';
import * as DecksAPI from '../utils/api';

export const loadAllDecks = (dispatch) => {
  return (dispatch) => {
    debugger;
    DecksAPI.getDecks()
    .then(decks => {
      console.log(decks);
      console.log(' aqui !');
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
