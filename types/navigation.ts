import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { NFTItem } from '../lib';

export type RootStackParamList = {
  Details: { item: NFTItem };
  Home: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
