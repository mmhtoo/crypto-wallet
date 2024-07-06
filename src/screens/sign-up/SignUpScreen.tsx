import {AuthLayout, ControlledInput} from 'components';
import React from 'react';
import {FormProvider} from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {color, fontFamily, SIZE} from 'styles';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';
import {useSignUp} from './hooks/useSignUp';
import {Button} from 'react-native-paper';

export default function SignUpScreen({
  navigation,
}: PublicStackScreenProps<'SignUp'>) {
  const {form, submit, isPending} = useSignUp();

  return (
    <AuthLayout onPress={() => navigation.canGoBack() && navigation.goBack()}>
      <FormProvider {...form}>
        <KeyboardAvoidingView
          style={styles.root}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{flex: 1, marginTop: 117}}>
            <Text
              style={{
                color: color.textWhite,
                fontFamily: fontFamily.regular,
                fontSize: SIZE.xxxl,
              }}>
              Create your account
            </Text>
            <View style={{marginTop: 20}}>
              <ControlledInput
                fieldName="username"
                label={'Name'}
                placeholder="Name"
              />
              <ControlledInput
                fieldName="email"
                label={'Email'}
                placeholder={'example@gmail.com'}
              />
              <ControlledInput
                fieldName="password"
                label={'Password'}
                placeholder={'Password'}
              />
            </View>
          </View>
          <View style={{paddingBottom: 40}}>
            <Button onPress={submit} disabled={isPending} mode="contained">
              {isPending ? 'Loading...' : 'Continue'}
            </Button>
            <View style={{marginTop: 10}}>
              <Text style={styles.byTappingText}>
                By tapping “Get Started” you agree and consent to our
              </Text>
              <View style={styles.privacyPolicyContainer}>
                <Text style={styles.privacyPolicyText}>Terms of Service</Text>
                <Text style={styles.byTappingText}>and</Text>
                <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </FormProvider>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.backgroundColor,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  byTappingText: {
    color: '#9B97DD',
    textAlign: 'center',
    fontSize: SIZE.m,
    fontFamily: fontFamily.medium,
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    justifyContent: 'center',
    fontFamily: fontFamily.medium,
  },
  privacyPolicyText: {
    color: color.primaryColor,
    textAlign: 'center',
    fontSize: SIZE.m,
    fontWeight: '400',
    fontFamily: fontFamily.medium,
  },
});
