import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:deck';

function createNewCard(question, answer) {
  return {
    question,
    answer
  }
}
export function submitNewDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck,
  }));
}
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res));
}

export function submitNewCard(title, question, answer) {
  const card = createNewCard(question, answer);
  getDecks()
  .then( decks => {
    decks[title].questions.push(card);
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  });
}
