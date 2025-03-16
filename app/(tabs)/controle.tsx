import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import NavBar from '../../components/NavBar';
import CardsControle from '../../components/CardsControle';
import ModalVisualizarProduto from '@/components/ModalVisualizar';
import ModalEditarProduto from '@/components/ModalEditar';
import ModalDeletar from '@/components/ModalDeletar';
import ModalCriarProduto from '@/components/ModalCriar';

export interface Product {
  id: string; // Adicionando o id
  imageUri: string;
  title: string;
  price: string;
  category: string;
}


export default function Controle() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      imageUri: 'https://lojadatenb2c.vtexassets.com/assets/vtex.file-manager-graphql/images/c0170385-30d6-4fed-9deb-4f5d57d9062d___affcfd10d3331c2bcaeb0df63c07b92a.png',
      title: 'Notebook',
      price: 'R$ 1999,99',
      category: 'Eletrônico',
    },
    {
      id: '2',
      imageUri: 'https://t2.tudocdn.net/719058?w=824&h=494',
      title: 'Smartphone XYZ',
      price: 'R$ 1999,99',
      category: 'Eletrônico',
    },
    {
      id: '3',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A5I3P4rt1kftXxVds7cQWs306znK9nrmdA&s',
      title: 'Hamburger',
      price: 'R$ 29,99',
      category: 'Alimento',
    },
    {
      id: '4',
      imageUri: 'https://cdn.awsli.com.br/600x700/1116/1116092/produto/224078346/facetune_12-08-2024-17-30-19-n2iocensqw.jpg',
      title: 'Calçado',
      price: 'R$ 190,99',
      category: 'Vestuários',
    },
    {
      id: '5',
      imageUri: 'https://www.webmotors.com.br/wp-content/uploads/2022/01/04173246/1.-Honda-CG-160.jpg',
      title: 'Moto',
      price: 'R$ 19990,99',
      category: 'Automóveis',
    },
    {
      id: '6',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EkkbEdF4CsU_9ajQ4LzNYn2TSs1je7JEOA&s',
      title: 'Casa em condomínio',
      price: 'R$ 259500',
      category: 'Imóveis',
    },
  ]);
  
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalDeleteVisible, setModalDeleteVisible] = useState<Product | null>(null);
  const [modalCreateVisible, setModalCreateVisible] = useState(false);

  const handleCreateProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };


  const AbreModalProduto = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const AbreModalEditar = (product: Product) => {
    setSelectedProduct(product);
    setModalEditVisible(true);
  };

  const updateProductInList = (updatedProduct: Product) => {
    setProducts((prevProducts: Product[]) =>
      prevProducts.map((product: Product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    console.log('Produto atualizado:', updatedProduct);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    
    setModalEditVisible(false);
  };

  // Função para abrir o modal de exclusão
  const openDeleteModal = (product: Product) => {
    setModalDeleteVisible(product);
  };

  // Função para excluir o produto
 // Função para excluir o produto usando o id
const handleDeleteProduct = () => {
  if (modalDeleteVisible) {
    setProducts(products.filter((product) => product.id !== modalDeleteVisible.id));
    setModalDeleteVisible(null);
  }
};


  const buttons = [
    { label: 'Home', icon: <FontAwesome name="home" size={24} color="white" />, onPress: () => router.push('/(tabs)/paginainicial') },
    { label: 'Contato', icon: <MaterialCommunityIcons name="chat-processing" size={24} color="white" />, onPress: () => router.push('/(tabs)/contato') },
    { label: 'Logout', icon: <MaterialCommunityIcons name="logout" size={24} color="white" />, onPress: () => router.push('/(tabs)') }
  ];

  return (
    <ScrollView style={styles.containerPai}>
      <NavBar buttons={buttons} />
      <View style={styles.boasVindas}>
        <FontAwesome name="user-circle-o" size={40} color="black" />
        <View style={styles.txtBoas}>
          <Text style={styles.msgBoasVindas}>Bem-vindo</Text>
          <Text style={styles.nome}>Rômulo</Text>
        </View>
        <View style={styles.btnCriar}>
          <TouchableOpacity style={styles.button} onPress={() => setModalCreateVisible(true)}>
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
        {products.map((product) => (
        <View key={product.id}>
          <CardsControle
            imageUri={product.imageUri}
            category={product.category}
            title={product.title}
            price={product.price}
            onView={() => AbreModalProduto(product)}  
            onEdit={() => AbreModalEditar(product)}
            onDelete={() => openDeleteModal(product)} 
          />
        </View>
      ))}
        </View>
      </View>
      <ModalVisualizarProduto
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        product={selectedProduct}
      />
      <ModalEditarProduto
        visible={modalEditVisible}
        onClose={() => setModalEditVisible(false)}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />
      <ModalDeletar
        visible={modalDeleteVisible !== null}
        onClose={() => setModalDeleteVisible(null)}
        onDelete={handleDeleteProduct}
        title="Excluir Produto"
      />
       <ModalCriarProduto
        visible={modalCreateVisible}
        onClose={() => setModalCreateVisible(false)}
        onCreate={handleCreateProduct}
      />
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
});
