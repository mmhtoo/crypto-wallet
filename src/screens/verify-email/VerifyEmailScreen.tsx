import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PublicStackScreenProps} from 'types/react-navigation/declarations';
import {color, fontFamily, SIZE} from 'styles';
import {AuthLayout, Button, ControlledInput} from 'components';
import {FormProvider, useForm} from 'react-hook-form';

const VerifyEmailScreen = ({
  navigation,
  route,
}: PublicStackScreenProps<'VerifyEmail'>) => {
  const {email} = route.params;
  const form = useForm();

  return (
    <AuthLayout onPress={() => navigation.canGoBack() && navigation.goBack()}>
      <View style={styles.mainContainer}>
        <View style={{flex: 1, marginTop: 117}}>
          <View style={{gap: 10}}>
            <Text style={styles.verifyEmail}>Verify your email</Text>
            <Text style={styles.codeSendText}>
              {`A 6-digit code has been sent to ${email}.\nPlease enter it within the next 1 minutes.`}
            </Text>
          </View>
          <FormProvider {...form}>
            <View style={{marginTop: 26}}>
              <ControlledInput fieldName="code" label={'Verification Code'} />
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Text style={styles.receiveCode}>Don’t receive the code?</Text>
            </TouchableOpacity>
          </FormProvider>
        </View>
        <View style={{paddingBottom: 80}}>
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </AuthLayout>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundColor,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  verifyEmail: {
    color: color.textWhite,
    fontFamily: fontFamily.regular,
    fontSize: SIZE.xxxl,
  },
  codeSendText: {
    color: color.blueGray,
    fontFamily: fontFamily.regular,
    fontSize: SIZE.l,
  },
  receiveCode: {
    color: color.blueGray,
    fontFamily: fontFamily.regular,
    fontSize: SIZE.m,
  },
});
