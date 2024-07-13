import {ProfileIcon} from 'assets/icons';
import {SafeAreaLayout} from 'components';
import dayjs from 'dayjs';
import {useAppDispatch, useAppSelector, useLogout} from 'hooks';
import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-paper';
import {addUserInfo, selectUserInfo} from 'redux/slices/user-slice/userSlice';
import {fontFamily} from 'styles';
import ProfileUpdateModal from './components/ProfileUpdateModal';
import {OnAfterUpdateCallback} from './hooks/useUpdateProfile';

export default function ProfileScreen() {
  const userInfo = useAppSelector(selectUserInfo);
  const logout = useLogout();
  // profile update modal state
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useAppDispatch();

  const afterUpdateCallback: OnAfterUpdateCallback = useCallback(
    data => {
      if (!userInfo) {
        return;
      }
      dispatch(
        addUserInfo({
          userInfo: {
            ...userInfo,
            username: data.username,
            date_of_birth: data.dob,
          },
        }),
      );
    },
    [dispatch, userInfo],
  );

  return (
    <SafeAreaLayout>
      <ScrollView style={styles.root}>
        <ProfileIcon
          width={64}
          height={64}
          fill={'white'}
          style={styles.profileIcon}
        />
        <View style={styles.editBtnContainer}>
          <Button onPress={() => setShowUpdateModal(true)}>Edit</Button>
        </View>
        {/* update profile modal */}
        <ProfileUpdateModal
          show={showUpdateModal}
          closeModal={() => setShowUpdateModal(false)}
          initialData={{
            username: userInfo?.username || '-',
            email: userInfo?.email || '-',
            dob: userInfo?.date_of_birth || '-',
          }}
          onAfterUpdate={afterUpdateCallback}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Username</Text>
            <Text style={styles.infoValue}>
              {userInfo ? userInfo.username : '...'}
            </Text>
          </View>
          <Divider />
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>
              {userInfo ? userInfo.email : '...'}
            </Text>
          </View>
          <Divider />
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoValue}>
              {userInfo
                ? userInfo.date_of_birth
                  ? dayjs(userInfo.date_of_birth).format('YY-MM-YYYY')
                  : '-'
                : '...'}
            </Text>
          </View>
          <Divider />
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Last login date</Text>
            <Text style={styles.infoValue}>
              {userInfo
                ? userInfo.last_login
                  ? dayjs(userInfo.last_login).format('YY-MM-YYYY')
                  : '-'
                : '...'}
            </Text>
          </View>
          <Divider />
          <View style={styles.infoWrapper}>
            <Text style={styles.infoLabel}>Last login IP</Text>
            <Text style={styles.infoValue}>
              {userInfo ? userInfo.last_login_ip : '...'}
            </Text>
          </View>
          <Divider />

          <Button onPress={logout} style={styles.logoutBtn}>
            Logout
          </Button>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
  profileIcon: {
    padding: 8,
    alignSelf: 'center',
  },
  infoContainer: {},
  infoWrapper: {
    paddingVertical: 10,
    rowGap: 8,
    paddingHorizontal: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fontFamily.bold,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fontFamily.regular,
  },
  logoutBtn: {
    marginTop: 16,
  },
  editBtnContainer: {
    marginVertical: 16,
  },
});
