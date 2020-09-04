import React, { useState  } from "react";
import {
  Dimensions,
  ActivityIndicator
} from "react-native";
import styles from "./style";
import { Container, Content, Item, Input , List, ListItem, Text, Left, Body, Right, Button} from 'native-base';
import { useSelector,useDispatch } from 'react-redux'
import { Colors } from "../../constants/constans";
import { FlatList } from "react-native-gesture-handler";
import { movieSearch } from "../../api/searchMovie";
import { Actions } from "react-native-router-flux";
import { setMovieResult } from "../../redux/actions";
import FastImage from 'react-native-fast-image'
const { width } = Dimensions.get("window");

export function HomePage({ navigation }) {

  const [textSearch , setTextSearch] = useState("")
  const [loading , setLoading] = useState(false)
  const notes = useSelector(state => state)
  const movieData = notes.movie_result
  const dispatch = useDispatch()
  const setMovieData = data => dispatch(setMovieResult(data))

  function searchMovies(){
    if (textSearch.length > 0 ){
      setLoading(true)
      movieSearch(textSearch).then(response=>{
        const dataObj =  response.data
        setMovieData(dataObj)
        
      }).catch(error=>{
        alert(error.response.data)
      }).finally(()=>setLoading(false))
    }
    
  }

  function inputChange(value){
    setTextSearch(value)
  }

  function showDetailInfo(index){
    Actions.push('detail')
  }
  function renderRow({ item , index }) {
  return ( 
         <List>
            <ListItem thumbnail>
              <Left>
                <FastImage square source={{ uri: item.Poster }} style={{width : width /5 , height : width / 5}} />
              </Left>
              <Body>
                <Text>{item.Title}</Text>
                <Text note >Released date: {item.Released}{"\n"}Duration:{item.Runtime}</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>{showDetailInfo(index)}}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>)

  }

  return (
    <Container>
        
        <Content>
        <Item style={styles.searchBox}>
            <Input placeholder="Search Movie Title"  value={textSearch}  onChangeText={inputChange} placeholderTextColor={Colors.gray}/>
          </Item>
          <Button primary style={styles.searchButton} disabled={loading} onPress={searchMovies}>
            {loading ? 
          <ActivityIndicator size={"small"} color={Colors.white}/>
          :
          <Text> Search </Text>
          }
            </Button>


          {movieData.Response === 'True' ? 
          <FlatList data={[movieData]}
          renderItem={(item , index) => renderRow(item , index)}
          keyExtractor={item => item.Title}
          
          />

          : <Text style={styles.notFound}>No Movie Found</Text>}
        </Content>
      </Container>
  );
}


