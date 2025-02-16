import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '../(tabs)/styles/login';

export default function TabLayout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    console.log('Redirecting to register page...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>  
        <Text style={styles.title}>Login</Text>
        <View style={styles.entradascontainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={handleLogin} color="#2028BF"  />
          <Button title="Cancelar" onPress={handleRegister} color="#2028BF" />
        </View>
      </View>
    </View>
  );
}
