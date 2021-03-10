import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BemVindo from './src/components/BemVindo';
import Lista from './src/components/Lista';

class App extends Component{

  render(){
      return(
          <View style={{flex: 1}}>
            <View style={{height: 50, backgroundColor: 'blue'}}></View>
            <View style={styles.titulo}>
              <BemVindo titSaudacao="Lista de Produtos"></BemVindo>
            </View>
            <Lista></Lista>
            <View style={{height: 50, backgroundColor: 'black'}}>
              <Text style={{color: 'white', textAlign: 'center'}}>Bela Vista Supermercados 2021</Text>
            </View>
          </View>
        
      )
  }

}

const styles = StyleSheet.create({
  container:{
    margin: 20,
  },
  titulo:{
    fontSize:50,
    alignItems: 'center'
  }
})

export default App;
