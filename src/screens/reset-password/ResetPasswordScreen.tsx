import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {ControlledInput, HeaderLayout} from '../../components';
import {PublicStackScreenProps} from '../../types/react-navigation/declarations';
import {FormProvider, useForm} from 'react-hook-form';

export default function ResetPasswordScreen({
  route,
}: PublicStackScreenProps<'ResetPassword'>) {
  const {email} = route.params;
  const form = useForm();
  return (
    <HeaderLayout>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant={'titleLarge'} style={styles.title}>
            Verify reset password
          </Text>
          <Text>
            We have sent OTP to {email} and Please kindly check in your email!
          </Text>
        </View>
        <FormProvider {...form}>
          <View style={styles.formContainer}>
            <ControlledInput
              label={'OTP code'}
              fieldName="otp"
              placeholder="XXXXXX"
            />
            <ControlledInput
              label={'New password'}
              fieldName="newPassword"
              placeholder="New password"
              secureTextEntry
            />
            <ControlledInput
              label={'Confirm password'}
              fieldName={'confirmPassword'}
              placeholder={'Confirm password'}
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button>Didn't receive the code?</Button>
            <Button mode={'contained'}>Confirm</Button>
          </View>
        </FormProvider>
      </ScrollView>
    </HeaderLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 64,
  },
  title: {
    fontWeight: '700',
  },
  header: {
    rowGap: 8,
    width: '80%',
  },
  formContainer: {
    rowGap: 8,
    marginTop: 64,
  },

  buttonContainer: {marginTop: 16, rowGap: 16},
  scrollContent: {
    paddingBottom: 64,
  },
});
