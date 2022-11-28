import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackScreenProps} from './types';
import {DrawerNavParamsList, MainStackParamsList} from './internaltypes';
import {ProjectsStackNavigator} from './ProjectsStackNavigator';
import {AnotherSamplePageScreen, SamplePageScreen} from '../screens';
import {LoginScreen, RegisterScreen} from '../screens';

const MainStack = createNativeStackNavigator<MainStackParamsList>();
const Drawer = createDrawerNavigator<DrawerNavParamsList>();

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
