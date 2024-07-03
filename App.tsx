import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';
import {StatusBar} from 'react-native';
import {darkTheme} from './src/constants';
import {color} from 'styles';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from 'libs';

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={darkTheme}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={color.backgroundColor}
        />
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
