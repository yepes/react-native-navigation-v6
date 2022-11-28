import {DrawerNavParamsProps} from '../../navigation';
import React from 'react';
import {Layout} from '../../interface';
import {Text} from 'react-native';

type AnotherSamplePageScreenProps = DrawerNavParamsProps<'AnotherSampleScreen'>;
export const AnotherSamplePageScreen: React.FC<
  AnotherSamplePageScreenProps
> = () => (
  <Layout>
    <Text>Another Sample page screen</Text>
  </Layout>
);
