import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ProdutoDestaqueProps {
  imageUri: string;
  title: string;
  price: string;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProdutoDestaque({
  imageUri,
  title,
  price,
  onView,
  onEdit,
  onDelete,
}: ProdutoDestaqueProps) {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground 
        source={{ uri: imageUri }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle} >
            <View style={styles.overlay} />
       
        <View >
          <Text style={styles.tituloProduto}>{title}</Text>
          <Text style={styles.preco}>{price}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 150,
    backgroundColor: '#9EC5E0',
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden', 
  },
  cardImage: {
    flex: 1,
    justifyContent: 'flex-end', 
    padding: 10, 
  },
  imageStyle: {
    borderRadius: 10,
  },
  tituloProduto: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.45)', 
  },
  preco: {
    fontSize: 18,
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
