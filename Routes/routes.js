import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

//Login Screens
import Login from '../src/Screens/Auth/login';
import Otp from '../src/Screens/Auth/otp';

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
      <Stack.Screen name="Otp" options={{headerShown: false}} component={Otp} />
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

export default routes;
