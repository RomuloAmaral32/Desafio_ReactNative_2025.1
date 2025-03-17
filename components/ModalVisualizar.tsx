import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ModalGenerico from './ModalGenerico';

interface Product {
  imageUri: string;
  title: string;
  price: string;
  category: string;
}

interface ModalVisualizarProdutoProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
}

const ModalVisualizarProduto: React.FC<ModalVisualizarProdutoProps> = ({ visible, onClose, product }) => {
  return (
    <ModalGenerico visible={visible} onClose={onClose} title="Detalhes do Produto">
      {product && (                                         /* nessa parte deveria puxar os dado do produto pelo id usando a API pelo método GET, porem nao consegui integrar */
        <View style={styles.content}>
          <Image source={{ uri: product.imageUri }} style={styles.modalImage} />
          <Text style={styles.modalCategory}>{product.category}</Text>
          <Text style={styles.modalTitle}>{product.title}</Text>
          <Text style={styles.modalPrice}>{product.price}</Text>
        </View>
      )}
    </ModalGenerico>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 150,
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
    marginBottom: 10,
  },
  modalCategory: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ModalVisualizarProduto;
