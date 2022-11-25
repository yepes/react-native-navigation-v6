import {NavigatorScreenParams} from '@react-navigation/native';

/**
 * types de la navegación. Para usarlos para anotar pantallas, usar los que
 * se exportan desde types
 */
export type MainStackParamsList = {
  Home: undefined;
  Register: undefined;
  LoggedIn: NavigatorScreenParams<DrawerNavParamsList>;
};

export type DrawerNavParamsList = {
  Projects: NavigatorScreenParams<ProjectsStackParamsList>;
  SampleScreen: undefined;
  AnotherSampleScreen: undefined;
};

export type ProjectsStackParamsList = {
  ProjectsList: undefined;
  ProjectsDetail: NavigatorScreenParams<ProjectDetailTabList>;
  ProjectDetailCommentsFilter: NavigatorScreenParams<ProjectDetailCommentsFilterStackList>;
  ProjectDetailCommentsCreate: undefined;
};

export type ProjectDetailTabList = {
  ProjectsDetailTab: undefined;
  ProjectsDetailTabComments: undefined;
  ProjectsDetailTabExpenses: undefined;
};
export type ProjectDetailCommentsFilterStackList = {
  ProjectDetailCommentsFilterScreen: {id: number};
  ProjectDetailCommentsFilterSubScreen: undefined;
};
