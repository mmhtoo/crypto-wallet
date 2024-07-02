import React from 'react';
import {Button, Text} from 'react-native-paper';
import {ControlledInput, SafeAreaLayout} from 'components';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';

export default function ResetPasswordEntryScreen({
  navigation,
}: PublicStackScreenProps<'ResetPasswordEntry'>) {
  const form = useForm();

  return (
    <SafeAreaLayout>
      <FormProvider {...form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.root}>
          <View style={styles.formContainer}>
            <View style={styles.header}>
              <Text variant={'titleLarge'} style={styles.title}>
                Reset password
              </Text>
              <Text>We'll send OTP to your email for reset password.</Text>
            </View>
            <View style={styles.inputContainer}>
              <ControlledInput
                fieldName={'email'}
                label={'Email'}
                placeholder={'example@gmail.com'}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() =>
                navigation.navigate('ResetPassword', {
                  email: form.getValues('email'),
                })
              }
              mode={'contained'}>
              Continue
            </Button>
            <Button>Cancel</Button>
          </View>
        </KeyboardAvoidingView>
      </FormProvider>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  formContainer: {
    marginTop: 104,
  },
  title: {
    fontWeight: '700',
  },
  header: {
    rowGap: 16,
  },
  inputContainer: {
    marginTop: 80,
  },
  buttonContainer: {
    rowGap: 16,
  },
});
