import {Pressable} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import colors from '../../../../components/constants/colors';
import styles from './styles';

interface props {
  activeIndex: SharedValue<number>;
  index: number;
  title: string;
  changeSelection: (index: number) => void;
}

const SingleRadioButton: FC<props> = ({
  activeIndex,
  index,
  title,
  changeSelection,
}) => {
  const animText = useAnimatedStyle(() => {
    return {
      color: withTiming(
        activeIndex.value === index ? colors.black : colors.white,
        {duration: 800},
      ),
    };
  });

  return (
    <Pressable
      onPress={() => {
        changeSelection(index);
      }}
      style={styles.textContainer}
      key={index}>
      <Animated.Text style={[styles.title, animText]}>{title}</Animated.Text>
    </Pressable>
  );
};

export default SingleRadioButton;
