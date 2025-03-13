import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Product } from '../app/(tabs)/controle';
import * as ImagePicker from 'expo-image-picker';

interface ModalEditarProdutoProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
  onSave: (updatedProduct: Product) => void;
}

const ModalEditarProduto: React.FC<ModalEditarProdutoProps> = ({ visible, onClose, product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(product);

  // Atualizar o estado quando o produto selecionado mudar
  React.useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  // Função para escolher a imagem
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedImageUri = result.assets[0].uri;
        setEditedProduct((prevProduct) => prevProduct ? { ...prevProduct, imageUri: selectedImageUri } : null);
      }
    } else {
      alert('Permissão para acessar a galeria foi negada');
    }
  };

  // Função para salvar as alterações
  const handleSave = () => {
    if (editedProduct) {
      onSave(editedProduct); // Chama a função de salvar com o produto editado
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Editar Produto</Text>

          {editedProduct && (
            <>
              {product && (
                <View style={styles.imageContainer}>
                  <ImageBackground
                    style={styles.image}
                    source={{ uri: editedProduct.imageUri }}
                    blurRadius={3}
                  >
                    <TouchableOpacity style={styles.iconContainer} onPress={pickImage}>
                      <Ionicons name="pencil" size={50} color="#fff" />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              )}
              <TextInput
                style={styles.input}
                placeholder="Título"
                value={editedProduct.title}
                onChangeText={(text) => setEditedProduct({ ...editedProduct, title: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Preço"
                value={editedProduct.price}
                onChangeText={(text) => setEditedProduct({ ...editedProduct, price: text })}
              />
              <TextInput
                style={styles.input}
                placeholder="Categoria"
                value={editedProduct.category}
                onChangeText={(text) => setEditedProduct({ ...editedProduct, category: text })}
              />
            </>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
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
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2028BF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#FF0000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  imageContainer: {
    marginBottom: 20,
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fundo escuro semi-transparente
    borderRadius: 50,
    padding: 10,
  },
});

export default ModalEditarProduto;
