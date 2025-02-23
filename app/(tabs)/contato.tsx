import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import NavBar from '../../components/NavBar';

export default function PaginaInicial() {
  const buttons = [
    { label: 'Home', icon: <FontAwesome name="home" size={24} color="white" />, onPress: () => router.push('/(tabs)/paginainicial') },
    { label: 'Controle', icon: <Entypo name="bar-graph" size={24} color="white" />, onPress: () => router.push('/(tabs)/controle') },
    { label: 'Logout', icon: <MaterialCommunityIcons name="logout" size={24} color="white" />, onPress: () => router.push('/(tabs)') }
  ];

  return (
    <ScrollView style={styles.containerPai}>
       <NavBar buttons={buttons} />
        <View style={styles.textos}>
          <Text style={styles.title}>Sobre nós</Text>
          <View>
            <Text style={styles.descricao}>Somos um aplicativo de marketplace focado em reunir as melhores ofertas de produtos variados em um único ambiente. Nosso propósito é conectar vendedores e clientes de maneira eficiente, proporcionando uma experiência de compra prática e segura. Valorizamos a diversidade, oferecendo uma ampla gama de categorias para que os consumidores encontrem exatamente o que procuram, enquanto apoiamos os vendedores na expansão de seus negócios. Com uma interface simples e intuitiva, buscamos facilitar o encontro entre oferta e demanda, garantindo sempre uma experiência positiva para todos os usuários.</Text>
          </View>
            <Text style={styles.title}>Entre em contato</Text>
          <View style={styles.containerredes}>
            <View style={styles.redes}>
            <Entypo name="instagram" size={24} color="black" />
            <Text style={styles.nomerede}>Instagram</Text>
            </View>
            <View style={styles.redes}>
            <FontAwesome name="whatsapp" size={30} color="black" />
            <Text style={styles.nomerede}>Whatsapp</Text>
            </View>
            <View style={styles.redes}>
            <FontAwesome name="phone" size={28} color="black" />
            <Text style={styles.nomerede}>Telefone</Text>
            </View>
            <View style={styles.redes}>
            <Entypo name="facebook" size={28} color="black" />
            <Text style={styles.nomerede}>Facebook</Text>
            </View>
            <View style={styles.redes}>
            <Entypo name="location-pin" size={30} color="black" />
            <Text style={styles.nomerede}>Endereço</Text>
            </View>
          </View>
        </View>
     </ScrollView>
  );
}


const styles = StyleSheet.create({
  containerPai: {
    width:"100%",
    height:"100%",
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
textos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
},
descricao: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'regular',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
},
containerredes: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: "2%",
    marginBottom: 80,
},
redes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: "8%",
},
nomerede: {
    fontSize: 20,
}
});