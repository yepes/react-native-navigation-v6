import {ProjectDetailTabProps} from '../../navigation';
import React from 'react';
import {Layout} from '../../interface';
import {Text} from 'react-native';

type ProjectsDetailScreenProps = ProjectDetailTabProps<'ProjectsDetailTab'>;
export const ProjectsDetailScreen: React.FC<ProjectsDetailScreenProps> = ({
  route,
}) => {
  return (
    <Layout>
      <Text>Project Detail</Text>
      <Text>{JSON.stringify(route, null, 2)}</Text>
    </Layout>
  );
};
