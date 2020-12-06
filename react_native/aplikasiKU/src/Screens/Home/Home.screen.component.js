// @flow

import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {Styles} from './Home.screen.style';
import {Routes} from '../../Routes';
import {Images} from '../../Themes/Images';

const HomePage = ({navigation}) => {
  // cara 1 = linking image
  const linkingImage = {
    uri: 'https://i.ytimg.com/vi/5R2DOFSQVtg/maxresdefault.jpg',
  };

  // cara 2 - local/asset image
  const imageAsset = Images.banner;

  const renderCardItem = ({item}) => (
    <View style={Styles.card}>
      <Image source={{uri: item?.image_url}} style={Styles.bannerCard} />
      <View style={Styles.contentCard}>
        <Text style={Styles.titleTextCard}>{item?.title}</Text>
        <Text style={Styles.descTextCard}>{item?.desc}</Text>
      </View>
    </View>
  );

  const dataCard = [
    {
      title: 'kartu satu',
      desc: 'Lorem ipsum dolor 1',
      image_url: 'https://i.ytimg.com/vi/5R2DOFSQVtg/maxresdefault.jpg',
    },
    {
      title: 'kartu dua',
      desc: 'Lorem ipsum dolor 2',
      image_url:
        'https://s3-us-west-1.amazonaws.com/psl-images/wp-content/uploads/2018/01/09202950/night-sky-stars4.jpg',
    },
    {
      title: 'kartu tiga',
      desc: 'Lorem ipsum dolor 3',
      image_url: 'https://i.ytimg.com/vi/5R2DOFSQVtg/maxresdefault.jpg',
    },
  ];

  return (
    <View style={Styles.container}>
      <Image source={imageAsset} style={Styles.bannerImage} />
      <FlatList
        data={dataCard}
        renderItem={renderCardItem}
        horizontal
        style={Styles.flatlistHorizontal}
      />
      <FlatList
        data={dataCard}
        renderItem={renderCardItem}
        style={Styles.flatlist}
      />
    </View>
  );
};

export default HomePage;
