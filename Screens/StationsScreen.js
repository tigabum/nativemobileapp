import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Station from '../Component/Station';

class StationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [
        {
          from: 'piyassa',
          to: 'Stadium',
          price: 2.5,
          id: 1,
        },
        {
          from: 'Stadium',
          to: 'Kalite',
          price: 5,
          id: 2,
        },
        {
          from: 'Mexico',
          to: 'Megenagna',
          price: 3,
          id: 3,
        },
        {
          from: 'CMC',
          to: 'Stadium',
          price: 4,
          id: 4,
        },
        {
          from: 'piyassa',
          to: 'Stadium',
          price: 2,
          id: 5,
        },
        {
          from: 'Stadium',
          to: 'Kalite',
          price: 4,
          id: 6,
        },
        {
          from: 'Mexico',
          to: 'Megenagna',
          price: 3,
          id: 7,
        },
        {
          from: 'CMC',
          to: 'Stadium',
          price: 4.5,
          id: 8,
        },
      ],
    };
  }

  renderItem = ({item}) => <Station item={item} />;

  render() {
    const {station} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={station}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default StationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00899e',
  },
  text: {
    color: 'white',
  },
});
