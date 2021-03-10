import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


class Produto extends Component{
    render(){
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.nome}</Text>
                <Text>Valor: {this.props.valor} Marca: {this.props.marca}</Text>
                <Text>Quantidade: {this.props.quantidade} Referencia: {this.props.ref}</Text>

                
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
        fontSize: 32
    }
})

export default Produto;