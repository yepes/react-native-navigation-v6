import {ProjectStackParamsProps} from '../../navigation';
import {Button} from 'react-native';
import React from 'react';
import {Layout} from '../../interface';

type ProjectsListScreenProps = ProjectStackParamsProps<'ProjectsList'>;
export const ProjectsListScreen = ({navigation}: ProjectsListScreenProps) => {
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
