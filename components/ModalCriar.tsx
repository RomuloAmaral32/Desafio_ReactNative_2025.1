import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface Product {
  id: string; 
  imageUri: string;
  title: string;
  price: string;
  category: string;
}

interface ModalCreateProductProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (newProduct: Product) => void;
}

const ModalCriarProduto: React.FC<ModalCreateProductProps> = ({ visible, onClose, onCreate }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    imageUri: '',
    title: '',
    price: '',
    category: '',
  });

  const handleChange = (field: keyof Product, value: string) => {
    setNewProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreate = () => {
    onCreate(newProduct); // Envia o novo produto para a função onCreate
    onClose(); // Fecha o modal
    setNewProduct({id: '', imageUri: '', title: '', price: '', category: '' }); // Limpa os campos após criar
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Criar Produto</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={newProduct.title}
            onChangeText={(text) => handleChange('title', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Categoria"
            value={newProduct.category}
            onChangeText={(text) => handleChange('category', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Preço"
            keyboardType="numeric"
            value={newProduct.price}
            onChangeText={(text) => handleChange('price', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Imagem (URL)"
            value={newProduct.imageUri}
            onChangeText={(text) => handleChange('imageUri', text)}
          />

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={onClose} style={styles.button}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCreate} style={styles.button}>
                    <Text style={styles.buttonText}>Criar</Text>
                    </TouchableOpacity>
                </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#2028BF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ModalCriarProduto;
