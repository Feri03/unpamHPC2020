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
import {StyleSheet, View, Text} from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text} onPress={() => navigation.navigate('Detail')}>
        {'Tekan untuk pindah screen'}
      </Text>
    </View>
  );
};

const DetailPage = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{'Ini screen Stack kedua'}</Text>
    </View>
  );
};

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Detail" component={DetailPage} />
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

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(234, 234, 235)',
  },
  text: {
    fontSize: 18,
    color: '#0b0c0f',
  },
});

export default App;
