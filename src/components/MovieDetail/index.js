import React from "react";
import {View} from "react-native"
import styles from "./style";
import { Container , Text , Card , CardItem , Body} from 'native-base';
import { useSelector,useDispatch } from 'react-redux'
import FastImage from 'react-native-fast-image'
import CardTexts from "../CardItems";
import TextItems from "../Labels";



export function MovieDetail({ navigation }) {

  const notes = useSelector(state => state)
  const movieData = notes.movie_result
  const dispatch = useDispatch()
  
  return (
    <Container style={{backgroundColor : '#f3f3f3'}}>
        
        <Card style={{marginLeft : 10 , marginRight : 10}}>
          <CardItem>
            <Body>
                  <View style={styles.topView}>
              <FastImage source={{uri : movieData.Poster}} style={styles.posterImage} />
              <View style={styles.infoView}>
                <Text style={styles.movieTitle}>{movieData.Title}</Text>
                <TextItems value={movieData.Genre} ></TextItems>
                <TextItems label={"Director: "} value={movieData.Director}/>
                <TextItems label={"Rate: "} value={movieData.imdbRating} />
                <TextItems label={"Language: "} value={movieData.Language}/>
              </View>
              
              </View>
        
            </Body>
          </CardItem>
        </Card>
        <CardTexts value={movieData.Awards} label ={"Awards:"}/>
        <CardTexts value={movieData.Actors} label ={"Actors:"}/>
        <CardTexts value={movieData.Plot} label ={"Plot:"}/>
        
        
      </Container>
  );
}


