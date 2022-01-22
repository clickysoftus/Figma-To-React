import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './Routes/routes';
import SplashScreen from 'react-native-splash-screen';
const App = props => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <Routes />
    </>
  );
};

export default App;
