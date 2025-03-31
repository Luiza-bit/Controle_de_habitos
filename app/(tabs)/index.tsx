import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Definindo tipos para os estilos
interface Styles {
  container: ViewStyle;
}

export default function Home(): JSX.Element {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Habitcontrol</ThemedText>
      <ThemedText>
        “O homem é um animal de hábitos” - Charles Dickens
      </ThemedText>
    </ThemedView>
  );
}

// Estilos
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
