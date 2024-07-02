import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStartScreen,
  PreviewScreen,
  SignInScreen,
  SignUpScreen,
} from 'screens';
import {PublicStackScreenList} from 'types/react-navigation/declarations';

const Stack = createNativeStackNavigator<PublicStackScreenList>();

function PublicStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="GetStart">
      <Stack.Screen name="GetStart" component={GetStartScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="ResetPasswordEntry"
        getComponent={() => require('screens').ResetPasswordEntryScreen}
      />
      <Stack.Screen
        name="ResetPassword"
        getComponent={() => require('screens').ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default PublicStackNavigator;
