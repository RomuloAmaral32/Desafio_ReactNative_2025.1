import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

  // Função para abrir a galeria e escolher uma imagem
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setNewProduct((prev) => ({ ...prev, imageUri: result.assets[0].uri }));
      }
    } else {
      alert('Permissão para acessar a galeria foi negada');
    }
  };

  const handleChange = (field: keyof Product, value: string) => {
    setNewProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreate = () => {
    onCreate(newProduct); /* nessa parte deveria criar um produto pelo id usando a API pelo método POST, porem nao consegui integrar */
    onClose(); // Fecha o modal
    setNewProduct({ id: '', imageUri: '', title: '', price: '', category: '' }); // Limpa os campos após criar
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Criar Produto</Text>
          <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
            {newProduct.imageUri ? (
              <Image source={{ uri: newProduct.imageUri }} style={styles.image} />
            ) : (
              <MaterialCommunityIcons name="image-plus" size={48} color="black" />
            )}
          </TouchableOpacity>

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
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imageText: {
    color: '#888',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   gap: 40,
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
