import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PaginaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à contato!</Text>
      <Text style={styles.subtitle}>Você está logado com sucesso.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
