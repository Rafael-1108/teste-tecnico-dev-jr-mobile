import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SKILLS = [
  { id: '1', name: 'React Native & Expo', icon: '⚛️' },
  { id: '2', name: 'JavaScript (ES6+)', icon: '📝' },
  { id: '3', name: 'React Hooks & State Management', icon: '🎣' },
  { id: '4', name: 'Estilização com StyleSheet', icon: '🎨' },
  { id: '5', name: 'Consumo e criação de APIs REST', icon: '🌐' },
  { id: '6', name: 'Git & GitHub', icon: '🔗' },
  { id: '7', name: 'HTML e CSS', icon: '🏗️' },
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Habilidades</Text>
      <FlatList
        data={SKILLS}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <View style={[styles.skillItem, index === SKILLS.length - 1 && styles.lastItem]}>
            <Text style={styles.skillIcon}>{item.icon}</Text>
            <Text style={styles.skillText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingVertical: 20,
    paddingHorizontal: 16, 
    backgroundColor: '#f8fafc' 
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 20
  },
  skillItem: { 
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16, 
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1e40af',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2
  },
  lastItem: {
    marginBottom: 0
  },
  skillIcon: {
    fontSize: 24,
    marginRight: 12
  },
  skillText: { 
    fontSize: 15, 
    color: '#334155', 
    fontWeight: '600',
    flex: 1
  }
});