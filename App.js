import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { FontAwesome } from '@expo/vector-icons';
import Home from './components/Home';
import NewDeck from './components/NewDeck';
import NewCard from './components/NewCard';
import Deck from './components/Deck';
import reducer from './reducers';

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} />
    }
  },
}, {
  tabBarPosition: 'bottom',
  navigationOptions: {
    header: null
  },
  tabBarOptions:{
    style: {
      height: 56,
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
});

const MainNavigator = StackNavigator({
  Main: {
    screen: Tabs,
  },
  DeckFlow: { screen: Deck},
  NewCard: { screen: NewCard}
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  )
);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
