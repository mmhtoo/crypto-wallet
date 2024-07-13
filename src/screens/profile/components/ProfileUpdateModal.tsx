import {ControlledInput} from 'components';
import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, View, Modal} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {color, fontFamily} from 'styles';

interface IProfileUpdateModalProps {
  show: boolean;
  initialData: {
    username: string;
    email: string;
    dob: Date | string;
  };
  closeModal: () => void;
}

export default function ProfileUpdateModal(props: IProfileUpdateModalProps) {
  const {show, initialData, closeModal} = props;
  const form = useForm();

  useEffect(() => {
    form.setValue('username', initialData.username);
    form.setValue('email', initialData.email);
    form.setValue('dob', initialData.dob);
  }, [initialData, form]);

  return (
    <Modal
      visible={show}
      animationType={'slide'}
      statusBarTranslucent
      transparent>
      <View style={styles.root}>
        <View style={styles.wrapper}>
          <Text variant={'titleLarge'} style={styles.title}>
            Update Profile
          </Text>
          <View style={styles.formContainer}>
            <FormProvider {...form}>
              <ControlledInput
                label={'Username'}
                fieldName={'username'}
                placeholder="Enter your name"
              />
              <ControlledInput
                label={'Email (Currently support for read only)'}
                fieldName={'email'}
                placeholder="Your email address"
                readOnly
              />
              <View>
                <ControlledInput
                  label={'Date of Birth'}
                  fieldName={'dob'}
                  placeholder="Your Birthday"
                  readOnly
                />
                <Button>Choose</Button>
              </View>
            </FormProvider>
          </View>
          <View style={styles.btnContainer}>
            <Button onPress={closeModal}>Cancel</Button>
            <Button mode={'contained'}>Update</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    width: '100%',
    height: '80%',
    backgroundColor: color.inputBackgroundColor,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    textAlign: 'center',
    fontFamily: fontFamily.juraBold,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    paddingTop: 24,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 32,
    paddingBottom: 16,
  },
});
