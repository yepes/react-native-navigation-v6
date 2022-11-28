import {StyleSheet, View} from 'react-native';
import React from 'react';

type LayoutProps = {
  children?: React.ReactNode;
};
const s = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
export const Layout = ({children}: LayoutProps) => <View style={s.layout}>{children}</View>;
