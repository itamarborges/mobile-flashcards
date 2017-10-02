import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:deck';

function createNewDeck(name) {
  return {
    title: (name),
    questions: []
  }
}
export function submitNewDeck(name) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [name]: createNewDeck(name),
  }));
}
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res));
}
