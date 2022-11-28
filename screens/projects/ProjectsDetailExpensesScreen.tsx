import {ProjectDetailTabProps} from '../../navigation';
import {Layout} from '../../interface';
import {Text} from 'react-native';
import React from 'react';
import {ProjectsContextSample} from '../../components';

type ProjectsDetailExpensesScreenProps =
  ProjectDetailTabProps<'ProjectsDetailTabExpenses'>;
export const ProjectsDetailExpensesScreen =
  ({}: ProjectsDetailExpensesScreenProps) => (
    <Layout>
      <ProjectsContextSample />
      <Text>Expenses here</Text>
    </Layout>
  );
