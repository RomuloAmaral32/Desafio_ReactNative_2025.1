import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import NavBar from '../../components/NavBar';
import CardsControle from '../../components/CardsControle';

interface Product {
  imageUri: string;
  title: string;
  price: string;
  category: string;
}

export default function Controle() {
  
  const navigation = useNavigation(); 

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const AbreModalProduto = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };
  
  const buttons = [
    { label: 'Home', icon: <FontAwesome name="home" size={24} color="white" />, onPress: () => router.push('/(tabs)/paginainicial') },
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

  return(
    <ScrollView style={styles.containerPai}>
      <NavBar buttons={buttons}/>
      <View style={styles.boasVindas}>
        <FontAwesome name="user-circle-o" size={40} color="black" />
        <View style={styles.txtBoas}>
          <Text style={styles.msgBoasVindas}>Bem-vindo</Text>
          <Text style={styles.nome}>Rômulo</Text>
        </View>
        <View style={styles.btnCriar}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.txtBotao}>
              <Text style={styles.buttonText}>Criar</Text>
              <FontAwesome name="plus" size={18} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.produtos}>
        <Text style={styles.title}>Seus produtos:</Text>
        <View style={styles.todoscards}>
          {products.map((product, index) => (
            <View key={index}>
              <CardsControle
                imageUri={product.imageUri}
                category={product.category}
                title={product.title}
                price={product.price}
                onView={() => AbreModalProduto(product)}  
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')} 
              />
            </View>
          ))}
        </View>
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {selectedProduct && (
              <>
                <Image source={{ uri: selectedProduct.imageUri }} style={styles.modalImage} />
                <Text style={styles.modalcategory}>{selectedProduct.category}</Text>
                <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
                <TouchableOpacity
                  style={styles.ButtonFechar}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.ButtonFecharTxt}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    backgroundColor: '#999393',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 0,
  },
  boasVindas: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtBoas: {
    marginLeft: 5,
    alignItems: 'center',
  },
  msgBoasVindas: {
    fontSize: 14,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2028BF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCriar: {
    marginLeft: '45%',
  },
  txtBotao: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  produtos: {
    marginTop: 30,
    marginBottom: 30,
  },
  todoscards: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 20,
    color: '#1C17BD',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalcategory:{
    fontSize:16,
    marginBottom:10,
  },
  ButtonFechar: {
    backgroundColor: '#2028BF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  ButtonFecharTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
