/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage, DetailPage} from './src/Routes/ScreenConfig';
import {Routes} from './src/Routes';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomePage} />
        <Stack.Screen name={Routes.Detail} component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => setCount(count + 1)}>
        {'Anda tekan sebanyak ' + count}
      </Text>
    </View>
  );
  */
};

export default App;
