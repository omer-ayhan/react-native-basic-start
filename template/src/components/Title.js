import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Title() {
  return <Text style={styles.title}>Title</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
