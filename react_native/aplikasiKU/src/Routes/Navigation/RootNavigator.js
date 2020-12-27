// @flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../'
import {HomePage, DetailPage} from '../ScreenConfig';

const Stack = createStackNavigator();

const MainStack = () => (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={HomePage} />
      <Stack.Screen name={Routes.Detail} component={DetailPage} />
    </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
