import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default App;
