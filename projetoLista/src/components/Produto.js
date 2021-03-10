import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


class Produto extends Component{
    render(){
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.nome}</Text>
                <Text style={{color: 'white'}}>Valor: {this.props.valor}   Marca: {this.props.marca}</Text>
                <Text style={{color: 'white'}}>Quantidade: {this.props.quantidade}   Referencia: {this.props.referencia}</Text> 
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.desc}>{this.props.desconto} </Text>
                    <Text style={styles.prom}>{this.props.promocao}</Text>  
                </View>        
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 12,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32,
        color:'white'
    },

    desc:{
        color: 'white',
        backgroundColor: 'green',
        marginTop: 10,
        marginRight: 20,
        padding: 10
    },
    prom:{
        color: 'white',
        backgroundColor: 'orange',
        marginTop: 10,
        padding: 10
    }
})

export default Produto;