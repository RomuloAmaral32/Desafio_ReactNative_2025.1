import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/contato';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function PaginaInicial() {
  return (
    <ScrollView style={styles.containerPai}>
        <View style={styles.NavBar}>
          <Image 
            source={require('../../assets/images/marketplace.png')}
            style={styles.logo}
          />
          <View style={styles.conjuntoBtns}>
            <TouchableOpacity onPress={() => router.push('/(tabs)/paginainicial')}>
              <View style={styles.conjunto}>
              <FontAwesome name="home" size={24} color="white" />
                <Text style={styles.textConjunto}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/controle')}>
            <View style={styles.conjunto}>
              <Entypo name="bar-graph" size={24} color="white" />
              <Text style={styles.textConjunto}>Controle</Text>
            </View>
          </TouchableOpacity >

            <TouchableOpacity 
              style={styles.conjunto}
              onPress={() => router.push('/(tabs)')} 
            >
              <MaterialCommunityIcons name="logout" size={24} color="white" />
              <Text style={styles.textConjunto}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
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
