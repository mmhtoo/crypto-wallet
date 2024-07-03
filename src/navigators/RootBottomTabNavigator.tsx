import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RootBottomTabScreenList} from 'types/react-navigation/declarations';

const Tab = createBottomTabNavigator<RootBottomTabScreenList>();

export default function RootBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={styles.sceneContainer}>
      <Tab.Screen
        name={'Wallet'}
        getComponent={() => require('screens').WalletScreen}
      />
      <Tab.Screen
        name={'TransactionHistory'}
        getComponent={() => require('screens').TransactionHistoryScreen}
      />
      <Tab.Screen
        name={'Profile'}
        getComponent={() => require('screens').ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: '#000',
  },
});
