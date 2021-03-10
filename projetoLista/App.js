import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BemVindo from './src/components/BemVindo';

export default function App() {
  return (
    <View style={styles.container}>
      <BemVindo titSaudacao="Lista de Produtos"></BemVindo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
