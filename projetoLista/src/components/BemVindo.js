import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class BemVindo extends Component{
    render(){
        return(
            <View>
                <Text style={styles.tit}>{this.props.titSaudacao}</Text>
            </View>
        )
    }
}

export default BemVindo;

const styles = StyleSheet.create({
    tit:{
        color: '#51A7FF',
        fontsize: 50,
        fontWeight: 500,
        marginBottom: 20
    }
})