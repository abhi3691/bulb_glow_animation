import {View} from 'react-native';
import React, {FC, useCallback} from 'react';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {ButtonWidth} from '../../constant';
import SingleRadioButton from '../../molecules/SingleRadioButton';

interface props {
  titles: [string, string];
  getActive: (index: number) => void;
}

const RadioButton: FC<props> = ({titles, getActive}) => {
  const activeIndex = useSharedValue(0);

  const changeSelection = useCallback(
    (index: number) => {
      activeIndex.value = index;
      getActive(index);
    },
    [activeIndex, getActive],
  );

  const btnanimStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(activeIndex.value * ButtonWidth),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, btnanimStyle]} />
      <View style={styles.row}>
        {titles.map((title, index) => (
          <SingleRadioButton
            index={index}
            activeIndex={activeIndex}
            title={title}
            changeSelection={changeSelection}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default RadioButton;
