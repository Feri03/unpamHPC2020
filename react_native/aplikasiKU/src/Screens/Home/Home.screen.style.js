import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(234, 234, 235)',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  bannerCard: {
    width: '100%',
    height: '50%',
    resizeMode: 'stretch',
  },
  contentCard: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  titleTextCard: {
    fontSize: 12,
  },
  descTextCard: {
    fontSize: 11,
  },
  flatlistHorizontal: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 700,
  },
});

export {Styles};
