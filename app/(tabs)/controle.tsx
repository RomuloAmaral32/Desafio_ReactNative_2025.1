import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import NavBar from '../../components/NavBar';

export default function controle() {
  const navigation = useNavigation(); 
    const buttons = [
      { label: 'Home', icon: <FontAwesome name="home" size={24} color="white" />, onPress: () => router.push('/(tabs)/paginainicial') },
      { label: 'Contato', icon: <MaterialCommunityIcons name="chat-processing" size={24} color="white" />, onPress: () => router.push('/(tabs)/contato') },
      { label: 'Logout', icon: <MaterialCommunityIcons name="logout" size={24} color="white" />, onPress: () => router.push('/(tabs)') }
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
          
        </View>
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
    marginBottom: 20,
  },
  boasVindas: {
    marginTop: 15,
    marginLeft:10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtBoas: {
    marginLeft: 5,
    alignItems: 'center'
  },
  msgBoasVindas: {
    fontSize: 14
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
    marginLeft: "45%",
  },
  txtBotao: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  produtos: {
    marginTop:40,
  },
});