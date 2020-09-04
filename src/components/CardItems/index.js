import React from 'react';
import {
    StyleSheet,
  } from 'react-native';
import {  Text , Card , CardItem , Body} from 'native-base';

export  default class CardTexts extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
    const value = this.props.value
    const label = this.props.label
    return (
        <Card style={styles.cardItem}>
        <CardItem>
          <Body>
    <Text style={styles.descriptionLabel}>{label} {value}</Text>  
              </Body>
        </CardItem>
      </Card>
   
    )

}
    }


const styles = StyleSheet.create({
    
    cardItem:{
        marginLeft : 10 ,
         marginRight : 10 , 
         marginTop : 5
        },
        descriptionLabel:{
            fontSize : 13 ,
            marginTop : 10,
            marginLeft : 10 ,
            marginRight : 10
          },
  });

