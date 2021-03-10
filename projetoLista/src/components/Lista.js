import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Produto from './Produto'


class Lista extends Component{
  constructor(props){
      super(props);
      this.state = {
          feed:[
              {id: '1', nome:'Arroz', valor: 'R$20,90', marca: 'Ibituruna', quantidade: '12', ref: '0001'},
              {id: '2', nome:'Feijão', valor: 'R$11,99', marca: 'Fufu', quantidade: '23', ref: '0002'},
              {id: '3', nome:'Macarrão', valor: 'R$4,99', marca: 'Renata', quantidade: '22', ref: '0003'},
              {id: '4', nome:'Açucar', valor: 'R$12,98', marca: 'União', quantidade: '20', ref: '0004'},
              {id: '5', nome:'Café', valor: 'R$7,90', marca: 'Três Corações', quantidade: '15', ref: '0005'},
              {id: '6', nome:'Farinha', valor: 'R$5,00', marca: 'Vilma', quantidade: '18', ref: '0006'},
          ]
      }
  }
  render(){
      return(
          <View style={StyleSheet.container}> 
              <FlatList 
              data={this.state.feed}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => <Produto
               nome={item.nome}
               valor={item.valor}
               marca={item.marca}
               quantidade={item.quantidade}
               ref={item.ref}
               />}
              />
          </View>
      )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20
  }
})

export default Lista;