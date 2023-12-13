import {View, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import GlowImage from '../../../../assets/images/glow.png';

interface props {
  activeIndex: SharedValue<number>;
}

const LightComppont: FC<props> = ({activeIndex}) => {
  const animStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(activeIndex.value, {
        duration: 800,
      }),
    };
  }, []);
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/7e/9b/c0/7e9bc0d71890ecae2668245e5afcf02b.jpg',
        }}
        style={styles.image}
      />
      <Animated.View style={[styles.glow, animStyle]}>
        <Image source={GlowImage} style={styles.image} />
      </Animated.View>
    </View>
  );
};

export default LightComppont;
