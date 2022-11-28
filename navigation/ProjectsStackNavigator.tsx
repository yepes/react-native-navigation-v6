import {DrawerNavParamsProps, ProjectStackParamsProps} from './types';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ProjectDetailCommentsFilterStackList,
  ProjectDetailTabList,
  ProjectsStackParamsList,
} from './internaltypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ProjectsDetailCommentsFilterScreen,
  ProjectsDetailCommentsCreate,
  ProjectsDetailCommentsScreen,
  ProjectsDetailScreen,
  ProjectsListScreen,
  ProjectsDetailCommentsFilterSubScreen,
  ProjectsDetailExpensesScreen,
} from '../screens';
import {Text, View} from 'react-native';

const ProjectsStack = createNativeStackNavigator<ProjectsStackParamsList>();
const ProjectDetailTab = createBottomTabNavigator<ProjectDetailTabList>();
const ProjectDetailCommentsFilterStack =
  createNativeStackNavigator<ProjectDetailCommentsFilterStackList>();

type ProjectStackNavigatorProps = DrawerNavParamsProps<'Projects'>;
export const ProjectsStackNavigator = ({}: ProjectStackNavigatorProps) => (
  <>
    <View>
      <Text>Contexto aqui</Text>
    </View>
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen
        name="ProjectsList"
        component={ProjectsListScreen}
      />
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
          component={ProjectDetailCommentStackNavigator}
        />
        <ProjectsStack.Screen
          name="ProjectDetailCommentsCreate"
          component={ProjectsDetailCommentsCreate}
        />
      </ProjectsStack.Group>
    </ProjectsStack.Navigator>
  </>
);

type ProjectDetailCommentFilterScreenProps =
  ProjectStackParamsProps<'ProjectDetailCommentsFilter'>;
const ProjectDetailCommentStackNavigator =
  ({}: ProjectDetailCommentFilterScreenProps) => (
    <ProjectDetailCommentsFilterStack.Navigator>
      <ProjectDetailCommentsFilterStack.Screen
        name="ProjectDetailCommentsFilterScreen"
        component={ProjectsDetailCommentsFilterScreen}
      />
      <ProjectDetailCommentsFilterStack.Screen
        name="ProjectDetailCommentsFilterSubScreen"
        component={ProjectsDetailCommentsFilterSubScreen}
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
        component={ProjectsDetailScreen}
      />
      <ProjectDetailTab.Screen
        name="ProjectsDetailTabComments"
        component={ProjectsDetailCommentsScreen}
      />
      <ProjectDetailTab.Screen
        name="ProjectsDetailTabExpenses"
        component={ProjectsDetailExpensesScreen}
      />
    </ProjectDetailTab.Navigator>
  );
