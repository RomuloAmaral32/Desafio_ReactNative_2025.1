// src/screens/PaginaInicial.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/paginainicial';
import { router } from 'expo-router';

export default function PaginaInicial() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.containerPai}>
      <View style={styles.NavBar}>
        <Image 
          source={require('../../assets/images/marketplace.png')}
          style={styles.logo}
        />
        <View style={styles.conjuntoBtns}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/controle')}>
          <View style={styles.conjunto}>
            <Entypo name="bar-graph" size={24} color="white" />
            <Text style={styles.textConjunto}>Controle</Text>
          </View>
        </TouchableOpacity >
          <TouchableOpacity onPress={() => router.push('/(tabs)/contato')}>
            <View style={styles.conjunto}>
              <MaterialCommunityIcons name="chat-processing" size={24} color="white" />
              <Text style={styles.textConjunto}>Contato</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.conjunto}
            onPress={() => navigation.goBack()} // Navega para a tela de Logout------volta para a tela anterior(o correto seria voltar para a index sem depender de voltar para a tela anterior)
          >
            <MaterialCommunityIcons name="logout" size={24} color="white" />
            <Text style={styles.textConjunto}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
