import { StyleSheet , Dimensions } from "react-native";
import { Colors } from '../../constants/constans';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    posterImage : {
      width : width/3,
      marginLeft : 10 , 
      marginTop : 20,
      height : width / 3
    },
    topView : {
      flexDirection : 'row',
      marginBottom : 10
    },
    movieTitle:{
      fontSize : 20 ,
      fontWeight : 'bold'
    },
    genreLabel:{
      fontSize : 16 ,
      marginTop : 5
    },
    
    infoView:{
        marginLeft : 10 ,
        flex : 1 , 
        flexDirection : 'column',
        marginTop : 20 , 
        marginRight : 10
    }
    });
      
export default styles;