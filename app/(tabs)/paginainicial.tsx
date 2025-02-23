import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import NavBar from '../../components/NavBar';             

export default function PaginaInicial() {
  const navigation = useNavigation(); 
  const buttons = [
    { label: 'Controle', icon: <Entypo name="bar-graph" size={24} color="white" />, onPress: () => router.push('/(tabs)/controle') },
    { label: 'Contato', icon: <MaterialCommunityIcons name="chat-processing" size={24} color="white" />, onPress: () => router.push('/(tabs)/contato') },
    { label: 'Logout', icon: <MaterialCommunityIcons name="logout" size={24} color="white" />, onPress: () => router.push('/(tabs)') }
  ];
  return (
    <ScrollView style={styles.containerPai}> 
    <NavBar buttons={buttons} />
    <View style={styles.containerPai}>
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


const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    backgroundColor: '#999393',
},
container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
destaqueProduto: {
    width: "80%",
    height: 150,
    backgroundColor: 'white',
    borderRadius: 16,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
},
subtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
},
containerNovos: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
cards: {
    width: "30%",
    height: 180,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: "5%",
    marginBottom: 30,
},
descricao: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'regular',
    marginBottom: 20,
},
containerdescricao: {
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
}
});