import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes/Colors';

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
  buttonContainer: {
    height: 35,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 200,
    marginHorizontal: 12,
  },
  textNormal: {
    paddingHorizontal: 10,
  },
  cardButton: {
    height: 40,
    width: 75,
    backgroundColor: Colors.FOREST_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: Colors.WHITE,
  },
  buttonDefault: {
    borderRadius: 70,
    overflow: 'hidden',
  },
});

export {Styles};
