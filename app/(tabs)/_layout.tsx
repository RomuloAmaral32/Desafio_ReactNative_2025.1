import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 
import styles from '../(tabs)/styles/login';

export default function TabLayout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();


  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return; 
    }
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('');      //navegação para a próxima tela após o login correto
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>  
        <Text style={styles.title}>Login</Text>
        <Image 
          source={require('../../assets/images/marketplace.png')}
          style={styles.logo}
        />
        <View style={styles.entradascontainer}>
          <View style={styles.inputEntrada}>
            <Ionicons name="mail-outline" size={20} color="#333" style={styles.icon} /> 
            <TextInput
              style={styles.input}
              placeholder="Digite seu Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputEntrada}>
            <Ionicons name="lock-closed-outline" size={20} color="#333" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
