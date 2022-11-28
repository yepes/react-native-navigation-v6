import React from 'react';
import {Layout} from '../../interface';
import {Text} from 'react-native';
import {DrawerNavParamsProps} from '../../navigation';

type SamplePageScreenProps = DrawerNavParamsProps<'SampleScreen'>;
export const SamplePageScreen: React.FC<SamplePageScreenProps> = () => (
  <Layout>
    <Text>Sample page screen</Text>
  </Layout>
);
