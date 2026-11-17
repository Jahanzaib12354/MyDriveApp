// 

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CodeCommunity from '../screens/RouteCommunity/CodeCommunity';


const Stack = createStackNavigator();

const RouteCommunity = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="CodeCommunity"
        component={CodeCommunity}
      />

     
    </Stack.Navigator>
  );
};

export default RouteCommunity;