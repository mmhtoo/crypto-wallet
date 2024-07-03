import {AuthLayout, Button, ControlledInput} from 'components';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, fontFamily, SIZE} from 'styles';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';

export default function SignInScreen({
  navigation,
}: PublicStackScreenProps<'SignIn'>) {
  const form = useForm();
  return (
    <AuthLayout onPress={() => navigation.canGoBack() && navigation.goBack()}>
      <View style={styles.root}>
        <View style={{flex: 1, marginTop: 117}}>
          <Text style={styles.existingAccount}>Add existing account</Text>
          <FormProvider {...form}>
            <View style={{marginTop: 26}}>
              <ControlledInput
                fieldName="email"
                placeholder="example@gmail.com"
                label={'Email'}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('ResetPasswordEntry');
                }}>
                <Text style={styles.resetPassword}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </View>
        <View style={{paddingBottom: 80}}>
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  existingAccount: {
    color: color.textWhite,
    fontFamily: fontFamily.medium,
    fontSize: SIZE.xxxl,
  },
  resetPassword: {
    textAlign: 'right',
    color: color.blueGray,
    fontFamily: fontFamily.regular,
    fontSize: SIZE.m,
  },
});
