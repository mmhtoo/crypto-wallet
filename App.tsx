import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';
import {StatusBar} from 'react-native';
import {darkTheme} from './src/constants';

export default function App(): JSX.Element {
  return (
    <PaperProvider theme={darkTheme}>
      <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
