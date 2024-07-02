import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/constants';
import {NavigationContainer} from '@react-navigation/native';
import {
  PrivateNavigator,
  PublicNavigator,
  RootStackNavigator,
} from './src/navigators';
import {SafeAreaView, StatusBar} from 'react-native';

export default function App(): JSX.Element {
  const isLogin = true;
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
        <NavigationContainer>
          {isLogin ? <PublicNavigator /> : <PrivateNavigator />}
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
