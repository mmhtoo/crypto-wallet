import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStartScreen, SignInScreen, SignUpScreen} from 'screens';
import {PublicStackScreenList} from 'types/react-navigation/declarations';

const Stack = createNativeStackNavigator<PublicStackScreenList>();

function PublicStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="GetStart">
      <Stack.Screen name="GetStart" component={GetStartScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="ResetPasswordEntry"
        getComponent={() => require('screens').ResetPasswordEntry}
      />
      <Stack.Screen
        name="ResetPassword"
        getComponent={() => require('screens').ResetPassword}
      />
    </Stack.Navigator>
  );
}

export default PublicStackNavigator;
