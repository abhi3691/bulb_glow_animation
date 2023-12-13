import {View} from 'react-native';
import React, {FC, useCallback} from 'react';
import styles from './styles';
import RadioButton from './orgnization/RadioButton';
import {useSharedValue} from 'react-native-reanimated';
import LightComppont from './orgnization/lightCompont';

const HomeScreen: FC = () => {
  const isOn = useSharedValue(0);
  const getActive = useCallback(
    (index: number) => {
      isOn.value = index;
    },
    [isOn],
  );

  return (
    <View style={styles.container}>
      <LightComppont isOn={isOn} />
      <RadioButton titles={['OFF', 'ON']} getActive={getActive} />
    </View>
  );
};

export default HomeScreen;
