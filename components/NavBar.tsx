import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router'; 

type ButtonProps = {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
};

export default function NavBar({ buttons }: { buttons: ButtonProps[] }) {
  return (
    <View style={styles.NavBar}>
      <Image 
        source={require('../assets/images/marketplace.png')}
        style={styles.logo}
      />
      <View style={styles.conjuntoBtns}>
        {buttons.map((button, index: number) => ( 
          <TouchableOpacity key={index} onPress={button.onPress}>
            <View style={styles.conjunto}>
              {button.icon}
              <Text style={styles.textConjunto}>{button.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { 
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  NavBar: {
    backgroundColor: '#2640A8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    minHeight: 70,
  },
  conjunto: {  
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conjuntoBtns: {
    flexDirection: 'row',
    gap:1000,
    justifyContent: 'space-around',
    flex: 1, 
  },
  textConjunto: {
    color: 'white',
    fontSize: 18,
  }
});
