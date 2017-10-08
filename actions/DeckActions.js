import {
  LOAD_DECKS,
  ADD_DECK
} from './types';
import * as DecksAPI from '../utils/api';

export const loadAllDecks = () => {
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

export const newDeck = (title) => {

  return (dispatch) => {

    const deck = { title, questions: []};

    addDeck(dispatch, deck);

    DecksAPI.submitNewDeck(deck)
      .catch((error) => {
        console.log(error);
      });
  };
};

const addDeck = (dispatch, deck) => {
  dispatch({
    type: ADD_DECK,
    deck
  });
}


export const newCard = (title, question, answer) => (dispatch) => {
  return (dispatch) => {
    DecksAPI.submitNewCard(title, question, answer)
    .then(loadAllDecks)
    .catch((error) => {
      console.log(error);
    });
  };
};
