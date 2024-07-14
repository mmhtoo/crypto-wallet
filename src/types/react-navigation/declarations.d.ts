import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicStackScreenList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPasswordEntry: undefined;
  ResetPassword: {
    email: string;
  };
  GetStart: undefined;
  Preview: undefined;
  VerifyEmail: {
    email: string;
  };
};

export type PublicStackScreenProps<T extends keyof PublicStackScreenList> =
  CompositeScreenProps<
    NativeStackScreenProps<PublicStackScreenList, T>,
    RootStackScreenProps<keyof RootStackScreenList>
  >;

export type RootStackScreenList = {
  PublicStack: NavigatorScreenParams<PublicStackScreenList>;
  RootTab: NavigatorScreenParams<RootBottomTabScreenList>;
  TransactionHistoryDetail: {
    transactionHash: string;
    transactionType: string;
    recipient: string;
    amount: number;
    fee: number | null;
    timestamp: Date | string;
    status: string;
  };
};

export type RootStackScreenProps<T extends keyof RootStackScreenList> =
  NativeStackScreenProps<RootStackScreenList, T>;

export type RootBottomTabScreenList = {
  Wallet: undefined;
  TransactionHistory: undefined;
  Profile: undefined;
};

export type RootBottomTabScreenProps<T extends keyof RootBottomTabScreenList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabScreenList, T>,
    RootStackScreenProps<keyof RootStackScreenList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackScreenList {}
  }
}
