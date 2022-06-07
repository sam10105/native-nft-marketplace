import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Details: { id: string };
  Home: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
