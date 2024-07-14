import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

export type StateType = {
  token?: {
    accessToken?: string;
    refreshToken?: string;
  };
  userInfo?: null | {
    id: number;
    last_login?: Date;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    user_id: string;
    last_login_ip: string;
    email: string;
    phone?: string;
    username: string;
    photo: string;
    date_of_birth?: Date | string;
    groups: string[];
    user_permissions: string[];
  };
};

const initialState: StateType = {
  token: undefined,
  userInfo: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (
      state,
      action: PayloadAction<{
        accessToken: string | undefined;
        refreshToken: string | undefined;
      }>,
    ) => {
      state.token = action.payload;
    },
    addUserInfo: (
      state,
      action: PayloadAction<Pick<StateType, 'userInfo'>>,
    ) => {
      state.userInfo = action.payload.userInfo;
    },
    resetUser: state => {
      state.token = undefined;
      state.userInfo = undefined;
    },
  },
});

export const {addToken, addUserInfo, resetUser} = userSlice.actions;
export const selectToken = (state: RootState) => state.user.token;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
