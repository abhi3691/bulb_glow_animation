import {StatusBar} from 'react-native';
import React from 'react';
import Routes from './src/routes/index.tsx';
import colors from './src/components/constants/colors.ts';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Routes />
    </React.Fragment>
  );
};

export default App;
