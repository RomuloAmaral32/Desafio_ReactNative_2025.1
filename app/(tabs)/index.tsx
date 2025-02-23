import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { router } from 'expo-router';  // Para navegação com expo-router

export default function TabLayout() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return; 
    }
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Navegando para a tela "paginainicial" após o login
    router.push('/paginainicial');  // Certifique-se de que o caminho esteja correto
  };

  return (
    <View style={style.container}>
      <View style={style.inputcontainer}>  
        <Text style={style.title}>Login</Text>
        <Image 
          source={require('../../assets/images/marketplace.png')}
          style={style.logo}
        />
        <View style={style.entradascontainer}>
          <View style={style.inputEntrada}>
            <Ionicons name="mail-outline" size={20} color="#333" style={style.icon} /> 
            <TextInput
              style={style.input}
              placeholder="Digite seu Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={style.inputEntrada}>
            <Ionicons name="lock-closed-outline" size={20} color="#333" style={style.icon} />
            <TextInput
              style={style.input}
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <View style={style.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={style.button}>
            <Text style={style.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999393',
      },
      inputcontainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
      },
      entradascontainer: {
        marginBottom: 20,
      },
      inputEntrada: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
      },
      icon: {
        marginRight: 10, 
      },
      buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#2028BF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      }
})