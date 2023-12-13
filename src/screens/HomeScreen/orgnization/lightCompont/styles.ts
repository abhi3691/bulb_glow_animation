import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: ScreenRatio.height / 2,
    width: ScreenRatio.width,
    marginVertical: 30,
    alignItems: 'center',
  },
  glow: {
    bottom: ScreenRatio.height / 8,
    height: ScreenRatio.height / 7,
    width: ScreenRatio.width / 2,
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    opacity: 0.6,
  },
});

export default styles;
