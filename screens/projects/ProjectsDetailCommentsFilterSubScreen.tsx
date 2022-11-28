import React from 'react';
import {Layout} from '../../interface';
import {Text} from 'react-native';
import {ProjectDetailCommentsFilterStackProps} from '../../navigation';

type ProjectsDetailCommentsFilterSubScreenProps =
  ProjectDetailCommentsFilterStackProps<'ProjectDetailCommentsFilterSubScreen'>;
export const ProjectsDetailCommentsFilterSubScreen: React.FC<
  ProjectsDetailCommentsFilterSubScreenProps
> = () => (
  <Layout>
    <Text>ProjectDetailCommentsFilterSubScreen</Text>
  </Layout>
);
