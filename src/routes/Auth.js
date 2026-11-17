





import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from '../screens/Auth/SplashScreen';
import HomeScreen from '../screens/Auth/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/Register'
import ForgotPassword from '../screens/Auth/ForgotPassword'
import PassCode from '../screens/Auth/PassCode'
import NewPassword from '../screens/Auth/NewPassword'

// import AlexScreen from '../screens/Auth/AlexScreen'
// import OfferRideScreen from '../screens/Auth/OfferRideScreen'
// import FindRiderScreen from '../screens/Auth/FindRiderScreen'
// import FindJoinScreen from '../screens/Auth/FindJoinScreen'
// import FindLocation from '../screens/Auth/FindLocation'

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen"
      >

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
           
       <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword} 
        />
      
        <Stack.Screen
            name="PassCode"
            component={PassCode}
        />
        
        <Stack.Screen
            name="NewPassword"
            component={NewPassword}
        />
      
   {/* <Stack.Screen
     name="AlexScreen"
     component={AlexScreen}
   />

   <Stack.Screen
   name="OfferRideScreen"
   component = {OfferRideScreen}
  />
  <Stack.Screen
  name="FindRiderScreen"
  component={FindRiderScreen}
  />
  <Stack.Screen
  name= "FindJoinScreen"
  component={FindJoinScreen}
  />
   <Stack.Screen
  name= "FindLocation"
  component={FindLocation}
  /> */}
      </Stack.Navigator> 
  );
};

export default AuthStack;



