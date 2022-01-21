import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

//Login Screens
import Login from '../src/Screens/Auth/login';

const Stack = createStackNavigator();

const Auth = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      animation="fade"
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      
    </Stack.Navigator>
  );
};

const routes = props => {
 
  return (
    <>
      <NavigationContainer>
     
          <Auth />
       
      </NavigationContainer>
    </>
  );
};

export default (routes);
