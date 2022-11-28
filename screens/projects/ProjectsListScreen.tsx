import {ProjectStackParamsProps} from '../../navigation';
import {Button, Text} from 'react-native';
import React from 'react';
import {Layout} from '../../interface';
import {useProjectContext} from '../../context';

type ProjectsListScreenProps = ProjectStackParamsProps<'ProjectsList'>;
export const ProjectsListScreen = ({navigation}: ProjectsListScreenProps) => {
  const context = useProjectContext();
  return (
    <Layout>
      <Text>Context</Text>
      <Text>{JSON.stringify(context, null, 2)}</Text>
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
