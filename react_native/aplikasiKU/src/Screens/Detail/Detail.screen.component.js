// @flow

import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from './Detail.screen.style';

const DetailPage = ({route}) => {
  const {data} = route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        {'Ini screen Stack kedua,\n Pesan: ' + data}
      </Text>
    </View>
  );
};

export default DetailPage;
