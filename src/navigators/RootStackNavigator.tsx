import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreenList} from '../types/react-navigation/declarations';
import {ResetPasswordScreen, SignInScreen, SignUpScreen} from 'screens';

const Stack = createNativeStackNavigator<RootStackScreenList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen name={'ResetPassword'} component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
