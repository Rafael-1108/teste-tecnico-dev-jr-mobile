import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SKILLS = [
  { id: '1', name: 'React Native & Expo' },
  { id: '2', name: 'JavaScript (ES6+)' },
  { id: '3', name: 'React Hooks & State Management' },
  { id: '4', name: 'Estilização com StyleSheet' },
  { id: '5', name: 'Consumo e criação de APIs REST' },
  { id: '6', name: 'Git & GitHub' },
  { id: '7', name: 'HTML e CSS' },
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SKILLS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillText}>🔹{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  skillItem: { 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#eee' 
  },
  skillText: { 
    fontSize: 16, 
    color: '#333', 
    fontWeight: '500' 
  }
});