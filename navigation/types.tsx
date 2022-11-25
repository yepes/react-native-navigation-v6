import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  DrawerNavParamsList,
  MainStackParamsList,
  ProjectDetailCommentsFilterStackList,
  ProjectDetailTabList,
  ProjectsStackParamsList,
} from './internaltypes';

export type MainStackScreenProps<T extends keyof MainStackParamsList> =
  NativeStackScreenProps<MainStackParamsList, T>;

export type DrawerNavParamsProps<T extends keyof DrawerNavParamsList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerNavParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

export type ProjectStackParamsProps<T extends keyof ProjectsStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProjectsStackParamsList, T>,
    DrawerNavParamsProps<keyof DrawerNavParamsList>
  >;

export type ProjectDetailTabProps<T extends keyof ProjectDetailTabList> =
  CompositeScreenProps<
    BottomTabScreenProps<ProjectDetailTabList, T>,
    ProjectStackParamsProps<keyof ProjectsStackParamsList>
  >;

export type ProjectDetailCommentsFilterStackProps<
  T extends keyof ProjectDetailCommentsFilterStackList,
> = CompositeScreenProps<
  NativeStackScreenProps<ProjectDetailCommentsFilterStackList, T>,
  ProjectStackParamsProps<keyof ProjectsStackParamsList>
>;
