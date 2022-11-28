import {Layout} from '../../interface';
import {Button, Text} from 'react-native';
import React from 'react';
import {MainStackScreenProps} from '../../navigation';

type LoginScreenProps = MainStackScreenProps<'Home'>;
export const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <Layout>
      <Text>Usuario</Text>
      <Text>Contraseña</Text>
      <Button
        title="Enter"
        onPress={() =>
          navigation.navigate('LoggedIn', {
            screen: 'Projects',
            params: {
              screen: 'ProjectsList',
            },
          })
        }
      />
      <Button
        title="Go to register"
        onPress={() => navigation.navigate('Register')}
      />
    </Layout>
  );
};
