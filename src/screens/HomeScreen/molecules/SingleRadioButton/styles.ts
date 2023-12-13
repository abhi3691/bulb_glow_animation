import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: RFValue(12),
    fontWeight: 'bold',
  },

  textContainer: {
    flex: 1,
    height: ScreenRatio.height / 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
