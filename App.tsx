import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';
import {darkTheme} from './src/constants';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <PaperProvider theme={darkTheme}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
