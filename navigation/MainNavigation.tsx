import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AnotherSamplePageScreen,
  LoginScreen,
  ProjectDetailCommentsCreate,
  ProjectDetailCommentsFilterScreen,
  ProjectDetailCommentsFilterSubScreen,
  ProjectDetailCommentsScreen,
  ProjectDetailExpensesScreen,
  ProjectDetailScreen,
  ProjectsScreen,
  RegisterScreen,
  SamplePageScreen,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  MainStackScreenProps,
  DrawerNavParamsProps,
  ProjectStackParamsProps,
} from './types';
import {
  DrawerNavParamsList,
  MainStackParamsList,
  ProjectDetailCommentsFilterStackList,
  ProjectDetailTabList,
  ProjectsStackParamsList,
} from './internaltypes';

const MainStack = createNativeStackNavigator<MainStackParamsList>();
const ProjectsStack = createNativeStackNavigator<ProjectsStackParamsList>();
const Drawer = createDrawerNavigator<DrawerNavParamsList>();
const ProjectDetailTab = createBottomTabNavigator<ProjectDetailTabList>();
const ProjectDetailCommentsFilterStack =
  createNativeStackNavigator<ProjectDetailCommentsFilterStackList>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={LoginScreen} />
        <MainStack.Screen name="Register" component={RegisterScreen} />
        <MainStack.Screen name="LoggedIn" component={DrawerNav} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

type DrawerNavProps = MainStackScreenProps<'LoggedIn'>;
const DrawerNav = ({}: DrawerNavProps) => (
  <Drawer.Navigator>
    <Drawer.Screen name="Projects" component={ProjectsStackNavigator} />
    <Drawer.Screen name="SampleScreen" component={SamplePageScreen} />
    <Drawer.Screen
      name="AnotherSampleScreen"
      component={AnotherSamplePageScreen}
    />
  </Drawer.Navigator>
);

type ProjectStackNavigatorProps = DrawerNavParamsProps<'Projects'>;
const ProjectsStackNavigator = ({}: ProjectStackNavigatorProps) => (
  <ProjectsStack.Navigator>
    <ProjectsStack.Screen name="ProjectsList" component={ProjectsScreen} />
    <ProjectsStack.Screen
      name="ProjectsDetail"
      component={ProjectDetailTabNavigationScreen}
    />
    <ProjectsStack.Group
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      <ProjectsStack.Screen
        name="ProjectDetailCommentsFilter"
        component={ProjectDetailCommentFilterScreen}
      />
      <ProjectsStack.Screen
        name="ProjectDetailCommentsCreate"
        component={ProjectDetailCommentsCreate}
      />
    </ProjectsStack.Group>
  </ProjectsStack.Navigator>
);

type ProjectDetailCommentFilterScreenProps =
  ProjectStackParamsProps<'ProjectDetailCommentsFilter'>;
const ProjectDetailCommentFilterScreen =
  ({}: ProjectDetailCommentFilterScreenProps) => (
    <ProjectDetailCommentsFilterStack.Navigator>
      <ProjectDetailCommentsFilterStack.Screen
        name="ProjectDetailCommentsFilterScreen"
        component={ProjectDetailCommentsFilterScreen}
      />
      <ProjectDetailCommentsFilterStack.Screen
        name="ProjectDetailCommentsFilterSubScreen"
        component={ProjectDetailCommentsFilterSubScreen}
      />
    </ProjectDetailCommentsFilterStack.Navigator>
  );

type ProjectDetailTabNavigationScreenProps =
  ProjectStackParamsProps<'ProjectsDetail'>;
const ProjectDetailTabNavigationScreen =
  ({}: ProjectDetailTabNavigationScreenProps) => (
    <ProjectDetailTab.Navigator>
      <ProjectDetailTab.Screen
        name="ProjectsDetailTab"
        component={ProjectDetailScreen}
      />
      <ProjectDetailTab.Screen
        name="ProjectsDetailTabComments"
        component={ProjectDetailCommentsScreen}
      />
      <ProjectDetailTab.Screen
        name="ProjectsDetailTabExpenses"
        component={ProjectDetailExpensesScreen}
      />
    </ProjectDetailTab.Navigator>
  );
