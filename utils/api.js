import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:deck';


export function submitNewDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck,
  }));
}
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res));
}

export function submitNewCard(title, card) {
  return getDecks()
  .then( decks => {
    decks[title].questions.push(card);
     AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function clear() {
  return AsyncStorage.clear(DECKS_STORAGE_KEY);
}
