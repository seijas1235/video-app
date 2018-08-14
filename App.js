import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';
import cards from './data';


//const Items =[cardData,cardData,cardData];
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SEBASTIAN CABAÑAS!</Text>
        <Text>CURSO DE REACT NATIVE </Text>     
      <CardSet items={cards}> 
      </CardSet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
