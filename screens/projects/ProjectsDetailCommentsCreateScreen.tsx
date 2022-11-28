import {ProjectStackParamsProps} from '../../navigation';
import React from 'react';
import {Layout} from '../../interface';
import {Text} from 'react-native';

type ProjectsDetailCommentsCreateProps =
  ProjectStackParamsProps<'ProjectDetailCommentsCreate'>;
export const ProjectsDetailCommentsCreate: React.FC<
  ProjectsDetailCommentsCreateProps
> = () => (
  <Layout>
    <Text>ProjectDetailCommentsCreate</Text>
  </Layout>
);
