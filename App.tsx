import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';
import {StatusBar} from 'react-native';
import {darkTheme} from './src/constants';
import {color} from 'styles';

export default function App(): JSX.Element {
  return (
    <PaperProvider theme={darkTheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.backgroundColor}
      />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
