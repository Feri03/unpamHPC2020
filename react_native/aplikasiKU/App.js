/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {getStore} from './src/Redux/Store';
import {Provider as StoreProvider} from 'react-redux';
import RootNavigator from './src/Routes/Navigation/RootNavigator';

const store = getStore();

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>
    </SafeAreaView>
    )
};

export default App;
