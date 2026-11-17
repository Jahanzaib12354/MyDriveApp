





import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
import AuthStack from './Auth'
import RouteCommunity from './RouteCommunity'
import Main from './Main'
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthStack"
      >

        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
        />
          <Stack.Screen
            name="RouteCommunity"
            component={RouteCommunity}
          />
        <Stack.Screen
          name="Main"
          component={Main}
        />
 
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default Routes;



