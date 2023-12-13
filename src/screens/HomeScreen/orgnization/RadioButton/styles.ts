import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';
import {ButtonWidth} from '../../constant';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 15,
    width: ButtonWidth * 2,
    borderWidth: 1,
    borderColor: colors.glowGreen,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: colors.glowGreen,
    position: 'absolute',
    height: ScreenRatio.height / 15,
    width: ButtonWidth,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
