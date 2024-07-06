import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type StateType = {
  token?: {
    accessToken?: string;
    refreshToken?: string;
  };
  userInfo?: null | {
    id: string;
    last_login: string;
    is_superuser: boolean;
    first_name: null | string;
    last_name: null | string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    user_id: string;
    last_login_ip: string;
    email: null | string;
    phone: null | string;
    username: null | string;
    photo: string;
    date_of_birth: null | string;
    groups: any;
    user_permissions: any;
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
