import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface CardsCarrosselProps {
  imageUri: string;
  category: string;
  title: string;
  price: string;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function CardsCarrossel({
  imageUri,
  category,
  title,
  price,
  onView,
  onEdit,
  onDelete,
}: CardsCarrosselProps) {
  return (
    <View style={styles.cardContainer}>
      <Image 
      source={{ uri: imageUri }}
      style={styles.cardImage}
      />
      <Text style={styles.categoria}>{category}</Text>
      <Text style={styles.tituloProduto}>{title}</Text>
      <Text style={styles.preco}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 110,
    minHeight:210,
    backgroundColor: '#9EC5E0',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  cardImage: {
    width:100,
    height:100,
    marginTop:8,
    borderRadius:12,
    marginBottom:10,
  },
  categoria: {
    fontSize:14,
    marginBottom:5,
    textAlign: 'center',
  },
  tituloProduto: {
    fontSize:16,
    marginBottom:5,
    textAlign: 'center',
  },
  preco: {
    fontSize:18,
    marginBottom:10,
    textAlign: 'center',
    color: '#1C17BD'
  },
  containerBts: {
    flexDirection: 'row',
    gap: 20,
  },
});
