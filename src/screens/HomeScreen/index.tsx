import {View} from 'react-native';
import React, {FC, useCallback} from 'react';
import styles from './styles';
import RadioButton from './orgnization/RadioButton';
import {useSharedValue} from 'react-native-reanimated';
import LightComppont from './orgnization/lightCompont';

const HomeScreen: FC = () => {
  const activeIndex = useSharedValue(0);
  const changeSelection = useCallback(
    (index: number) => {
      activeIndex.value = index;
    },
    [activeIndex],
  );

  return (
    <View style={styles.container}>
      <LightComppont activeIndex={activeIndex} />
      <RadioButton
        titles={['OFF', 'ON']}
        changeSelection={changeSelection}
        activeIndex={activeIndex}
      />
    </View>
  );
};

export default HomeScreen;
