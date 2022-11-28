import React from 'react';
import {Layout} from '../../interface';
import {Button, Text} from 'react-native';
import {ProjectDetailCommentsFilterStackProps} from '../../navigation';

type ProjectsDetailCommentsFilterScreenProps =
  ProjectDetailCommentsFilterStackProps<'ProjectDetailCommentsFilterScreen'>;
export const ProjectsDetailCommentsFilterScreen: React.FC<
  ProjectsDetailCommentsFilterScreenProps
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
