import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/perfil-rafael.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Rafael Santos Mendes</Text>
      <Text style={styles.role}>Desenvolvedor Mobile Júnior</Text>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Sobre mim</Text>
        <Text style={styles.aboutText}>
          Entusiasta de tecnologia apaixonado por criar soluções mobile limpas e eficientes.
          Atualmente focado no ecossistema React Native e em constante aprendizado.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  avatar: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  role: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20 
  },
  aboutContainer: { 
    width: '100%', 
    padding: 15, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 8 
  },
  aboutTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  aboutText: { 
    fontSize: 14, 
    color: '#444', 
    lineHeight: 20 
  }
});