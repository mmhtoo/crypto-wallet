import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreenList} from '../types/react-navigation/declarations';
import PublicStackNavigator from './PublicStackNavigator';
import RootBottomTabNavigator from './RootBottomTabNavigator';
import {useAppDispatch, useAppSelector, useGetProfile} from 'hooks';
import {addUserInfo, selectToken} from 'redux/slices/user-slice/userSlice';
import {AxiosResponse} from 'axios';
import {InfoResponse, UserData} from 'api';
import {useRefreshToken} from 'hooks/useRefreshToken';

const Stack = createNativeStackNavigator<RootStackScreenList>();

const useSetupUserInfo = (
  userData?: AxiosResponse<UserData | InfoResponse>,
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!userData || !userData.data) {
      return;
    }
    const userInfo: UserData = userData.data as UserData;
    if (!userInfo.id) {
      return;
    }
    dispatch(addUserInfo({userInfo}));
  }, [userData, dispatch]);
};

export default function RootStackNavigator() {
  const token = useAppSelector(selectToken);

  const {
    data: userData,
    shouldTokenRefresh,
    onFinishedTokenRefresh,
  } = useGetProfile(!!token?.accessToken && !!token.refreshToken);

  useSetupUserInfo(userData);
  useRefreshToken(shouldTokenRefresh, onFinishedTokenRefresh);

  return (
    <Stack.Navigator
      initialRouteName={
        !!token?.accessToken && !!token.refreshToken ? 'RootTab' : 'PublicStack'
      }
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PublicStack" component={PublicStackNavigator} />
      <Stack.Screen name="RootTab" component={RootBottomTabNavigator} />
      <Stack.Screen
        name="TransactionHistoryDetail"
        getComponent={() => require('screens').TransactionHistoryDetailScreen}
      />
    </Stack.Navigator>
  );
}
