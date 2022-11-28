import React from 'react';
import {MainStackScreenProps} from '../../navigation';
import {Layout} from '../../interface';
import {Text} from 'react-native';

type RegisterScreenProps = MainStackScreenProps<'Register'>;
export const RegisterScreen = ({}: RegisterScreenProps) => {
  return (
    <Layout>
      <Text>Register screen</Text>
    </Layout>
  );
};
