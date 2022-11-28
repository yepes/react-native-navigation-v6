import {ProjectDetailTabProps} from '../../navigation';
import {Layout} from '../../interface';
import {Text} from 'react-native';
import React from 'react';

type ProjectsDetailExpensesScreenProps =
  ProjectDetailTabProps<'ProjectsDetailTabExpenses'>;
export const ProjectsDetailExpensesScreen =
  ({}: ProjectsDetailExpensesScreenProps) => (
    <Layout>
      <Text>Expenses here</Text>
    </Layout>
  );
