// src/screens/PaginaInicial.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/paginainicial';
import { router } from 'expo-router';

export default function PaginaInicial() {
  const navigation = useNavigation(); 

  return (
    <ScrollView style={styles.containerPai}> 
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
        <View style={styles.container}>
          <Text style={styles.title}>Produto em destaque</Text>
          <View style={styles.destaqueProduto}>

          </View>
        </View>
        <View style={styles.containerNovos}>
        <Text style={styles.subtitle}>Novos Produtos</Text>
          <View style={styles.cards}>

          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>sobre o aplicativo</Text>
        </View>
        <View style={styles.containerdescricao}>
          <Text style={styles.descricao}>O aplicativo tem como objetivo centralizar todas as ofertas de produtos de diversas categorias em um único lugar, criando um ponto de encontro entre vendedores e clientes. Nele, os usuários podem explorar novidades e aproveitar boas ofertas, facilitando o encontro eficiente entre a oferta e a demanda. Dessa forma, o aplicativo proporciona uma experiência prática e otimizada, onde consumidores podem acessar uma ampla variedade de produtos, enquanto os vendedores encontram uma plataforma eficaz para alcançar seu público-alvo.</Text>
        </View>
    </View>
    </ScrollView>
  );
} 