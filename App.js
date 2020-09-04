/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { HomePage } from './src/components/Home';
import { Colors } from './src/constants/constans';
import {
  Scene,
  Router,
  Modal,
  Stack
} from 'react-native-router-flux';
import { MovieDetail } from './src/components/MovieDetail';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider,useSelector , useDispatch } from 'react-redux';
import { store, persistor } from './src/redux/store/store';



const App: () => React$Node = () => {
  return (
    <>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
   
      <StatusBar barStyle="dark-content"  backgroundColor ={Colors.primary}/>
      <Router>
    <Stack key="home">
      <Scene key="home" component={HomePage}  />
      <Scene key="detail" component={MovieDetail} />
      
    </Stack>
  </Router>
  </PersistGate>
  </Provider>
          </>
  );
};


export default App;
