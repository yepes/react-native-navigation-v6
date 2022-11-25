import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  MainStackScreenProps,
  DrawerNavParamsProps,
  ProjectStackParamsProps,
  ProjectDetailCommentsFilterStackProps,
  ProjectDetailTabProps,
} from '../navigation';

type Props = {
  children?: React.ReactNode;
};

const s = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
const Layout = ({children}: Props) => <View style={s.layout}>{children}</View>;

type LoginScreenProps = MainStackScreenProps<'Home'>;
export const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <Layout>
      <Text>Usuario</Text>
      <Text>Contraseña</Text>
      <Button
        title="Enter"
        onPress={() =>
          navigation.navigate('LoggedIn', {
            screen: 'Projects',
            params: {
              screen: 'ProjectsList',
            },
          })
        }
      />
      <Button
        title="Go to register"
        onPress={() => navigation.navigate('Register')}
      />

      {/*<Button*/}
      {/*  title="Test Button"*/}
      {/*  onPress={() =>*/}
      {/*    navigation.navigate('LoggedIn', {*/}
      {/*      screen: 'Projects',*/}
      {/*    })*/}
      {/*  }*/}
      {/*/>*/}
    </Layout>
  );
};

type RegisterScreenProps = MainStackScreenProps<'Register'>;
export const RegisterScreen = ({}: RegisterScreenProps) => {
  return (
    <Layout>
      <Text>Register screen</Text>
    </Layout>
  );
};

type ProjectsScreenProps = ProjectStackParamsProps<'ProjectsList'>;
export const ProjectsScreen = ({navigation}: ProjectsScreenProps) => {
  return (
    <Layout>
      {[...Array(10)].map((_, i) => (
        <Button
          key={i}
          title={`Project ${i}`}
          onPress={() =>
            navigation.navigate('ProjectsDetail', {
              screen: 'ProjectsDetailTab',
            })
          }
        />
      ))}
    </Layout>
  );
};

type ProjectDetailScreenProps = ProjectDetailTabProps<'ProjectsDetailTab'>;
export const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = ({
  route,
}) => {
  return (
    <Layout>
      <Text>Project Detail</Text>
      <Text>{JSON.stringify(route, null, 2)}</Text>
    </Layout>
  );
};

type ProjectsDetailTabCommentsProps =
  ProjectDetailTabProps<'ProjectsDetailTabComments'>;
export const ProjectDetailCommentsScreen: React.FC<
  ProjectsDetailTabCommentsProps
> = ({navigation}) => (
  <Layout>
    <Text>Comments here</Text>
    <Button
      title="filter"
      onPress={() => {
        navigation.navigate('ProjectDetailCommentsFilter', {
          screen: 'ProjectDetailCommentsFilterScreen',
          params: {
            id: 23,
          },
        });
      }}
    />
    <Button
      title="create"
      onPress={() => {
        navigation.navigate('ProjectDetailCommentsCreate');
      }}
    />
  </Layout>
);

type ProjectDetailCommentsCreateProps =
  ProjectStackParamsProps<'ProjectDetailCommentsCreate'>;
export const ProjectDetailCommentsCreate: React.FC<
  ProjectDetailCommentsCreateProps
> = () => (
  <Layout>
    <Text>ProjectDetailCommentsCreate</Text>
  </Layout>
);

// type ProjectDetailCommentsFilterScreenProps = NativeStackScreenProps<
//   ProjectDetailCommentsFilterStackList,
//   'ProjectDetailCommentsFilterScreen'
// >;

type ProjectDetailCommentsFilterScreenProps =
  ProjectDetailCommentsFilterStackProps<'ProjectDetailCommentsFilterScreen'>;
export const ProjectDetailCommentsFilterScreen: React.FC<
  ProjectDetailCommentsFilterScreenProps
> = ({navigation, route}) => (
  <Layout>
    <Text>ProjectDetailCommentsFilterScreen</Text>
    <Button
      title="Go to sub comments filter screen"
      onPress={() =>
        navigation.navigate('ProjectDetailCommentsFilterSubScreen')
      }
    />
    <Text>{JSON.stringify(route.params.id, null, 2)}</Text>
  </Layout>
);

type ProjectDetailCommentsFilterSubScreenProps =
  ProjectDetailCommentsFilterStackProps<'ProjectDetailCommentsFilterSubScreen'>;
export const ProjectDetailCommentsFilterSubScreen: React.FC<
  ProjectDetailCommentsFilterSubScreenProps
> = () => (
  <Layout>
    <Text>ProjectDetailCommentsFilterSubScreen</Text>
  </Layout>
);

type ProjectDetailExpensesScreenProps =
  ProjectDetailTabProps<'ProjectsDetailTabExpenses'>;
export const ProjectDetailExpensesScreen =
  ({}: ProjectDetailExpensesScreenProps) => (
    <Layout>
      <Text>Expenses here</Text>
    </Layout>
  );

type SamplePageScreenProps = DrawerNavParamsProps<'SampleScreen'>;
export const SamplePageScreen: React.FC<SamplePageScreenProps> = () => (
  <Layout>
    <Text>Sample page screen</Text>
  </Layout>
);

type AnotherSamplePageScreenProps = DrawerNavParamsProps<'AnotherSampleScreen'>;
export const AnotherSamplePageScreen: React.FC<
  AnotherSamplePageScreenProps
> = () => (
  <Layout>
    <Text>Another Sample page screen</Text>
  </Layout>
);
