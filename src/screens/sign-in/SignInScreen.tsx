import {AuthLayout, Button, ControlledInput} from 'components';
import React from 'react';
import {FormProvider} from 'react-hook-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, fontFamily, SIZE} from 'styles';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';
import {useSignIn} from './hooks/useSignIn';
import {Button as PaperButton} from 'react-native-paper';

export default function SignInScreen({
  navigation,
}: PublicStackScreenProps<'SignIn'>) {
  const {form, isPending, submitSignIn} = useSignIn();
  return (
    <AuthLayout onPress={() => navigation.canGoBack() && navigation.goBack()}>
      <View style={styles.root}>
        <View style={{flex: 1, marginTop: 117}}>
          <Text style={styles.existingAccount}>Add existing account</Text>
          <FormProvider {...form}>
            <View style={{marginTop: 26, rowGap: 8}}>
              <ControlledInput
                fieldName="email"
                placeholder="example@gmail.com"
                label={'Email'}
              />
              <ControlledInput
                fieldName="password"
                secureTextEntry
                placeholder="Your password"
                label={'Password'}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('ResetPasswordEntry');
                }}>
                <Text style={styles.resetPassword}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </View>
        <View style={{paddingBottom: 80}}>
          <Button
            disabled={isPending}
            title="Continue"
            onPress={submitSignIn}
          />
          <PaperButton
            disabled={isPending}
            onPress={() => navigation.navigate('SignUp')}>
            New user?
          </PaperButton>
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
