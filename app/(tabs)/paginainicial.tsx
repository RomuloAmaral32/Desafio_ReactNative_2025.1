import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles/paginainicial';

export default function PaginaInicial() {
  return (
    <View style={styles.containerPai}>
      <View style={styles.NavBar}>
        <Image 
                  source={require('../../assets/images/marketplace.png')}
                  style={styles.logo}
                />
      </View>
        
    </View>
  );
}

