import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { clear } from '../utils/api';
import { loadAllDecks } from '../actions';
import { sortString } from '../utils/helpers';
import CardDeck from './CardDeck';

class Home extends Component {
  state = {
    loading: false,
  }

  componentWillMount() {
    //this.setState({ loading: true });
  }

  componentDidMount() {
    this.props.loadAllDecks()
  //  .then(this.setState({ loading: false}));
  }

  pressDeck = (item) => {
    this.props.navigation.navigate('Deck',
        { title: item.title }
      )
  }


  renderItem = ({ item }) => (
    <CardDeck
      title={item.title}
      qtdCards={item.questions.length}
      onPress={() => this.pressDeck(item)}
    />
  )

   _keyExtractor = (item, index) => item.title;

  render() {
    // if (this.state.loading) {
    //   return <ActivityIndicator style={{ marginTop: 30 }} />
    // }

    const { allDecks } = this.props.decks;
    const arrDecks = Object.values(allDecks);

    arrDecks.sort((a,b) => a.title.localeCompare(b.title));

    return(
      <View style={styles.container}>
        {allDecks &&
          <FlatList
            data={arrDecks}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />
        }
      </View>
    );
  }


}

const mapStateToProps = ({ decks }) => ({ decks });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

export default connect( mapStateToProps, { loadAllDecks })(Home);
