import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={require('../assets/perfil-rafael.png')}
          style={styles.avatar}
        />
      </View>
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
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f8fafc'
  },
  avatarWrapper: {
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 80
  },
  avatar: { 
    width: 160, 
    height: 160, 
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#1e40af'
  },
  name: { 
    fontSize: 26, 
    fontWeight: '700', 
    color: '#0f172a',
    marginBottom: 8
  },
  role: { 
    fontSize: 16, 
    color: '#64748b', 
    marginBottom: 30,
    fontWeight: '500'
  },
  aboutContainer: { 
    width: '100%', 
    padding: 20, 
    backgroundColor: '#fff', 
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1e40af',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3
  },
  aboutTitle: { 
    fontSize: 18, 
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 12
  },
  aboutText: { 
    fontSize: 15, 
    color: '#475569', 
    lineHeight: 24
  }
});