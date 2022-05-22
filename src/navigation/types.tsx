import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Index: undefined;
  Users: undefined;
  User: {
    id?: string;
    isRandom?: boolean;
  };
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}
