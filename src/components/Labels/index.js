import React from 'react';
import {
    StyleSheet,
  } from 'react-native';
import {  Text } from 'native-base';

export  default class TextItems extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
    const value = this.props.value
    const label = this.props.label
    return (
        
    <Text style={styles.labelStyle}>{label}{value}</Text>  
        
    )

}
    }


const styles = StyleSheet.create({
    
    labelStyle:{
        fontSize : 16 ,
        marginTop : 5
      },
  });

