import {ProjectDetailTabProps} from '../../navigation';
import React from 'react';
import {Layout} from '../../interface';
import {Button, Text} from 'react-native';
import {ProjectsContextSample} from '../../components';

type ProjectsDetailTabCommentsProps =
  ProjectDetailTabProps<'ProjectsDetailTabComments'>;
export const ProjectsDetailCommentsScreen: React.FC<
  ProjectsDetailTabCommentsProps
> = ({navigation}) => (
  <Layout>
    <ProjectsContextSample />
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
