import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import NavBar from '../../components/NavBar';
import CardsControle from '../../components/CardsControle';



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
          <View style={styles.todoscards}>
            <View style={styles.cads}>
              <View style={styles.doiscards}>
                <CardsControle
                imageUri="https://lojadatenb2c.vtexassets.com/assets/vtex.file-manager-graphql/images/c0170385-30d6-4fed-9deb-4f5d57d9062d___affcfd10d3331c2bcaeb0df63c07b92a.png"
                category="Eletrônicos"
                title="Notbook"
                price="R$ 1999,99"
                onView={() => console.log('Visualizar')}
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')} 
                />
                <CardsControle
                imageUri="https://t2.tudocdn.net/719058?w=824&h=494"
                category="Eletrônicos"
                title="Smartphone XYZ"
                price="R$ 1999,99"
                onView={() => console.log('Visualizar')}
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')} 
                />
              </View>
            </View>
            <View style={styles.cads}>
              <View style={styles.doiscards}>
                <CardsControle
                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9A5I3P4rt1kftXxVds7cQWs306znK9nrmdA&s"
                category="Comida"
                title="Hamburger"
                price="R$ 29,99"
                onView={() => console.log('Visualizar')}
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')}  
                />
                <CardsControle
                imageUri="https://cdn.awsli.com.br/600x700/1116/1116092/produto/224078346/facetune_12-08-2024-17-30-19-n2iocensqw.jpg"
                category="Vestuarios"
                title="Calçado"
                price="R$ 190,99"
                onView={() => console.log('Visualizar')}
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')} 
                />
              </View>
            </View>
            <View style={styles.cads}>
              <View style={styles.doiscards}>
                <CardsControle
                imageUri="https://www.webmotors.com.br/wp-content/uploads/2022/01/04173246/1.-Honda-CG-160.jpg"
                category="Veículos"
                title="Moto"
                price="R$ 19990,99"
                onView={() => console.log('Visualizar')}
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')} 
                />
                <CardsControle
                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EkkbEdF4CsU_9ajQ4LzNYn2TSs1je7JEOA&s"
                category="Imóveis"
                title="Casa em condomínio"
                price="R$ 259500"
                onView={() => console.log('Visualizar')}
                onEdit={() => console.log('Editar')}
                onDelete={() => console.log('Excluir')} 
                />
              </View>
            </View>
          </View>
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
    marginBottom: 40,
    marginTop:0,
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
    marginTop:30,
    marginBottom:30,
    
  },
  cads: {
    flexDirection: 'row',
  },
  todoscards: {
    justifyContent: 'center',
    alignItems: 'center',
    gap:15,
  }, 
  doiscards: {
    flexDirection: 'row',
    gap:20,
  }
});