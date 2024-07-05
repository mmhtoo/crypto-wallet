import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators';
import {StatusBar} from 'react-native';
import {darkTheme} from './src/constants';
import {color} from 'styles';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from 'libs';
import {persistedStore, store} from 'redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ToastProvider} from 'react-native-toast-notifications';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <PaperProvider theme={darkTheme}>
              <StatusBar
                barStyle={'light-content'}
                backgroundColor={color.backgroundColor}
              />
              <NavigationContainer>
                <RootStackNavigator />
              </NavigationContainer>
            </PaperProvider>
          </ToastProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
