import { StyleSheet } from "react-native";
import { Colors } from '../../constants/constans';


const styles = StyleSheet.create({
   searchBox : {
     marginTop : 10 ,
     marginRight : 10 , 
     marginLeft : 10,
     marginBottom : 20,

    },
    searchButton : {
      alignSelf : 'center',
      width : '70%',
      justifyContent : 'center',
      marginBottom : 30

    },
    notFound : {
      alignSelf : 'center',
      fontSize : 24,
      textAlign : 'center'
    }

    
    });
      
export default styles;