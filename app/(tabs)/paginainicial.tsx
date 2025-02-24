import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import NavBar from '../../components/NavBar';  
import CardsCarrossel from '@/components/CardCarrossel';  
import ProdutoDestaque from '@/components/ProdutoDestaque';    

interface Product {
  imageUri: string;
  title: string;
  price: string;
  category: string;
}

export default function PaginaInicial() {
  const navigation = useNavigation(); 
  const buttons = [
    { label: 'Controle', icon: <Entypo name="bar-graph" size={24} color="white" />, onPress: () => router.push('/(tabs)/controle') },
    { label: 'Contato', icon: <MaterialCommunityIcons name="chat-processing" size={24} color="white" />, onPress: () => router.push('/(tabs)/contato') },
    { label: 'Logout', icon: <MaterialCommunityIcons name="logout" size={24} color="white" />, onPress: () => router.push('/(tabs)') }
  ];
  const products: Product[] = [
    {
      imageUri: 'https://lojadatenb2c.vtexassets.com/assets/vtex.file-manager-graphql/images/c0170385-30d6-4fed-9deb-4f5d57d9062d___affcfd10d3331c2bcaeb0df63c07b92a.png',
      title: 'Notebook',
      price: 'R$ 1999,99',
      category: 'Eletrônico',
    },
    {
      imageUri: 'https://t2.tudocdn.net/719058?w=824&h=494',
      title: 'Smartphone XYZ',
      price: 'R$ 1999,99',
      category: 'Eletrônico',

    },
    {
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A5I3P4rt1kftXxVds7cQWs306znK9nrmdA&s',
      title: 'Hamburger',
      price: 'R$ 29,99',
      category: 'Alimento',

    },
    {
      imageUri: 'https://cdn.awsli.com.br/600x700/1116/1116092/produto/224078346/facetune_12-08-2024-17-30-19-n2iocensqw.jpg',
      title: 'Calçado',
      price: 'R$ 190,99',
      category: 'Vestuários',

    },
    {
      imageUri: 'https://www.webmotors.com.br/wp-content/uploads/2022/01/04173246/1.-Honda-CG-160.jpg',
      title: 'Moto',
      price: 'R$ 19990,99',
      category: 'Automóveis',

    },
    {
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EkkbEdF4CsU_9ajQ4LzNYn2TSs1je7JEOA&s',
      title: 'Casa em condomínio',
      price: 'R$ 259500',
      category: 'Imóveis',

    },
  ];
  return (
    <ScrollView style={styles.containerPai}> 
    <NavBar buttons={buttons} />
    <View>
        <View style={styles.container}>
          <Text style={styles.title}>Produto em destaque</Text>
          <View>
            <ProdutoDestaque
            imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A5I3P4rt1kftXxVds7cQWs306znK9nrmdA&s"
            title="Hamburger"
            price="R$ 29,99"
            onView={() => console.log('Visualizar')}
            onEdit={() => console.log('Editar')}
            onDelete={() => console.log('Excluir')} 
            />
          </View>
        </View>
        <View style={styles.containerNovos}>
        <Text style={styles.subtitle}>Novos Produtos</Text>
          <View style={styles.carrossel}>
                         {products.map((product, index) => (
                                     <View key={index}>
                                       <CardsCarrossel
                                         imageUri={product.imageUri}
                                         category={product.category}
                                         title={product.title}
                                         price={product.price} 
                                       />
                                     </View>
                                   ))}
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
carrossel: {
  flexDirection: 'row',
  gap:10,
  marginBottom:20,
},
container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
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