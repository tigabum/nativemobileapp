import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
class Station extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.from}>From: {item.from} </Text>

          <Text style={styles.to}>To: {item.to} </Text>
          <Text style={styles.price}>Price: {item.price} ETB </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Station;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  itemContainer: {
    margin: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'white',

    width: 250,
    padding: 5,
  },
  from: {
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  to: {
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    color: 'white',
  },
});
