// @flow

import React from 'react';
import {View, ViewPropTypes} from 'react-native';
import {Styles} from './Card.style';

type Props = {
  style?: ViewPropTypes.style,
  children: React$Node,
};

export default ({style, children}: Props) => {
  return <View style={[Styles.cardContainer, style]}>{children}</View>;
};
