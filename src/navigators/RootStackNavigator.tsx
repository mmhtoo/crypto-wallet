import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreenList} from '../types/react-navigation/declarations';
import PublicStackNavigator from './PublicStackNavigator';
import RootBottomTabNavigator from './RootBottomTabNavigator';
import {useGetProfile} from 'hooks';

const Stack = createNativeStackNavigator<RootStackScreenList>();

export default function RootStackNavigator() {
  // substitute later with state from redux
  const isLogin = true;

  useGetProfile(isLogin);

  return (
    <Stack.Navigator
      initialRouteName={'PublicStack'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PublicStack" component={PublicStackNavigator} />
      <Stack.Screen name="RootTab" component={RootBottomTabNavigator} />
      <Stack.Screen
        name="TransactionHistoryDetail"
        getComponent={() => require('screens').TransactionHistoryDetailScreen}
      />
    </Stack.Navigator>
  );
}
