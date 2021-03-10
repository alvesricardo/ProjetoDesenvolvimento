import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Produto from './Produto'


class Lista extends Component{
  constructor(props){
      super(props);
      this.state = {
          feed:[
              {id: '1', nome:'Arroz', valor: 'R$20,90', marca: 'Ibituruna', quantidade: '12', referencia: '0001', desconto:'15% de desconto', promocao:'leve 5 pague 4'},
              {id: '2', nome:'Feijão', valor: 'R$11,99', marca: 'Fufu', quantidade: '23', referencia: '0002', desconto:'5% de desconto', promocao:'leve 6 pague 4'},
              {id: '3', nome:'Macarrão', valor: 'R$4,99', marca: 'Renata', quantidade: '22', referencia: '0003', desconto:'5% de desconto', promocao:'leve 2 pague 1'},
              {id: '4', nome:'Açucar', valor: 'R$12,98', marca: 'União', quantidade: '20', referencia: '0004', desconto:'10% de desconto', promocao:'leve 3 pague 2'},
              {id: '5', nome:'Café', valor: 'R$7,90', marca: 'Três Corações', quantidade: '15', referencia: '0005', desconto:'10% de desconto', promocao:'leve 3 pague 2'},
              {id: '6', nome:'Farinha', valor: 'R$5,00', marca: 'Vilma', quantidade: '18', referencia: '0006', desconto:'5% de desconto', promocao:'leve 4 pague 3'},
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
               referencia={item.referencia}
               desconto={item.desconto}
               promocao={item.promocao}
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