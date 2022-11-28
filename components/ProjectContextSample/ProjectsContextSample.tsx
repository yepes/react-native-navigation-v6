import React from 'react';
import {useProjectContext} from '../../context';
import {Button, StyleSheet, Text, View} from 'react-native';

/**
 * Ejemplo rápido para demostrar el uso de un contexto sobre todas las pantallas
 * de los proyectos
 * @constructor
 */
export const ProjectsContextSample = () => {
  const context = useProjectContext();
  return (
    <View>
      <Text>Context</Text>
      <Text>{JSON.stringify(context, null, 2)}</Text>
      <View style={s.row}>
        <Button
          title="Increase counter"
          onPress={() => context.setCounter(context.counter + 1)}
        />

        <Button
          title="Decrease counter"
          onPress={() => context.setCounter(context.counter - 1)}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});
