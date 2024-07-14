import {ControlledInput} from 'components';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {FormProvider} from 'react-hook-form';
import {StyleSheet, View, Modal} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button, Text} from 'react-native-paper';
import {color, fontFamily} from 'styles';
import useUpdateProfile, {
  OnAfterUpdateCallback,
} from '../hooks/useUpdateProfile';

interface IProfileUpdateModalProps {
  show: boolean;
  initialData: {
    username: string;
    email: string;
    dob: Date | string;
  };
  closeModal: () => void;
  onAfterUpdate: OnAfterUpdateCallback;
}

const TODAY = new Date();

export default function ProfileUpdateModal(props: IProfileUpdateModalProps) {
  const {show, initialData, closeModal, onAfterUpdate} = props;
  const [dob, setDob] = useState(TODAY);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {form, isPending, onSubmit} = useUpdateProfile(result => {
    closeModal();
    onAfterUpdate(result);
  });

  useEffect(() => {
    form.setValue('username', initialData.username);
    form.setValue('email', initialData.email);
    form.setValue('dob', initialData.dob.toString());
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
                <View>
                  <ControlledInput
                    fieldName={'dob'}
                    label={'Date of Birth'}
                    placeholder="Your Birthday"
                    readOnly
                  />
                  <DatePicker
                    modal
                    theme={'dark'}
                    date={dob}
                    onCancel={() => {
                      setShowDatePicker(false);
                      setDob(
                        initialData.dob === '-'
                          ? new Date()
                          : (initialData.dob as Date),
                      );
                    }}
                    onConfirm={date => {
                      setShowDatePicker(false);
                      setDob(date);
                      form.setValue('dob', dayjs(date).format('YYYY-MM-DD'));
                    }}
                    open={showDatePicker}
                    maximumDate={TODAY}
                  />
                  <Button onPress={() => setShowDatePicker(true)}>
                    Choose
                  </Button>
                </View>
              </View>
            </FormProvider>
          </View>

          <View style={styles.btnContainer}>
            <Button disabled={isPending} onPress={closeModal}>
              Cancel
            </Button>
            <Button disabled={isPending} onPress={onSubmit} mode={'contained'}>
              {isPending ? 'Updating...' : 'Update'}
            </Button>
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
    paddingTop: 24,
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 32,
    paddingBottom: 32,
  },
  btn: {
    backgroundColor: 'red',
  },
});
