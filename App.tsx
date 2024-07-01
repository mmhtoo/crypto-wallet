import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/constants';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
