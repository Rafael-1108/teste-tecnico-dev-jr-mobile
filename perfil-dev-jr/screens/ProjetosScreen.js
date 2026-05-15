import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function ProjectsContactScreen() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) {
      Alert.alert("Erro", "Por favor, digite uma mensagem antes de enviar.");
      return;
    }
    Alert.alert("Sucesso", "Mensagem enviada com sucesso! (Simulação)");
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Meus Projetos</Text>
      
      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>🚀 App App_Name</Text>
        <Text style={styles.projectDescription}>Aplicativo de finanças pessoais desenvolvido em React Native.</Text>
      </View>
      
      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>📦 EcoMart</Text>
        <Text style={styles.projectDescription}>E-commerce focado em produtos sustentáveis com Expo Go.</Text>
      </View>

      <Divider />

      <Text style={styles.sectionTitle}>Contato & Redes</Text>
      <Text style={styles.infoText}>📧 email@devstart.com</Text>
      <Text style={styles.infoText}>🔗 github.com/seu-usuario</Text>
      <Text style={styles.infoText}>💼 linkedin.com/in/seu-perfil</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem aqui..."
        value={message}
        onChangeText={setMessage}
        multiline
      />
      
      <Button title="Enviar contato" onPress={handleSend} color="#007AFF" />
    </ScrollView>
  );
}

// Pequeno componente interno para separar as seções de forma elegante
const Divider = () => <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 20 }} />;

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#fff', 
    flexGrow: 1 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: '#111' 
  },
  projectCard: { 
    padding: 15, 
    backgroundColor: '#f5f5f5', 
    borderRadius: 8, 
    marginBottom: 12 
  },
  projectTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#007AFF' 
  },
  projectDescription: { 
    fontSize: 14, 
    color: '#555', 
    marginTop: 4 
  },
  infoText: { 
    fontSize: 15, 
    marginBottom: 8, 
    color: '#333' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 6, 
    padding: 12, 
    height: 100, 
    textAlignVertical: 'top', 
    marginTop: 15, 
    marginBottom: 15 
  }
});