import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './src/constants';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? lightTheme : darkTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
