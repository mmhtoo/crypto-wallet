import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreenList} from '../types/react-navigation/declarations';
import {ResetPasswordScreen, SignInScreen, SignUpScreen} from '../screens';
import ResetPasswordEntryScreen from '../screens/reset-password/ResetPasswordEntryScreen';

const Stack = createNativeStackNavigator<RootStackScreenList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'ResetPasswordEntry'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen name={'ResetPassword'} component={ResetPasswordScreen} />
      <Stack.Screen
        name={'ResetPasswordEntry'}
        component={ResetPasswordEntryScreen}
      />
    </Stack.Navigator>
  );
}
