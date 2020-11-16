// @flow

import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from './Home.screen.style';
import {Routes} from '../../Routes';

const HomePage = ({navigation}) => {
  const data = 'Selamat jalan -home';
  return (
    <View style={Styles.container}>
      <Text
        style={Styles.text}
        onPress={() => navigation.navigate(Routes.Detail, {data})}>
        {'Tekan untuk pindah screen'}
      </Text>
    </View>
  );
};

export default HomePage;
