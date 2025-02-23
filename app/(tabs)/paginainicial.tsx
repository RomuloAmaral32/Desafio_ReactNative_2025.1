// src/screens/PaginaInicial.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
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
            onPress={() => router.push('/(tabs)')} // Navega para a tela de Logout------volta para a tela anterior(o correto seria voltar para a index sem depender de voltar para a tela anterior)
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


const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    //alignItems: 'center',
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
logo : { 
    width: 50,
    height: 50,
    marginLeft: 10,
},
NavBar: {
    backgroundColor: '#2640A8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: "20%",
    minHeight: 70,
},
icon: {
    position: 'absolute',
    right: 10,
    top: 10,
},
conjunto: {  
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
},
conjuntoBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: "5%",
},
textConjunto: {
    color: 'white',
    fontSize: 18,
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