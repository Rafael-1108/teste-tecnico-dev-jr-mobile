import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function ProjetosScreen() {
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
      <Text style={styles.sectionTitle}>🚀 Meus Projetos</Text>
      
      <View style={styles.projectCard}>
        <View style={styles.projectHeader}>
          <Text style={styles.projectIcon}>📰</Text>
          <Text style={styles.projectTitle}>Kickoff - Site de notícias esportivas</Text>
        </View>
        <Text style={styles.projectDescription}>Aplicativo completo para controle de finanças pessoais desenvolvido em React Native com integração de APIs.</Text>
      </View>
      
      <View style={styles.projectCard}>
        <View style={styles.projectHeader}>
          <Text style={styles.projectIcon}>🃏</Text>
          <Text style={styles.projectTitle}>CollectionHub - Site de colecionáveis de pokémon</Text>
        </View>
        <Text style={styles.projectDescription}>E-commerce inovador focado em produtos sustentáveis e ecológicos com Expo Go.</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>📞 Contato & Redes</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>📧 rafael.mendes5227@gmail.com</Text>
        <Text style={styles.infoText}>🔗 https://github.com/Rafael-1108</Text>
        <Text style={styles.infoText}>💼 https://www.linkedin.com/in/rafael-santos-5a2aa4349/</Text>
      </View>
      
      <Text style={styles.messageTitle}>Envie uma mensagem</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem aqui..."
        placeholderTextColor="#94a3b8"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Enviar contato</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingVertical: 20,
    paddingHorizontal: 16, 
    backgroundColor: '#f8fafc', 
    flexGrow: 1 
  },
  sectionTitle: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginBottom: 16, 
    color: '#0f172a' 
  },
  projectCard: { 
    padding: 16, 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#1e40af',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  projectIcon: {
    fontSize: 24,
    marginRight: 10
  },
  projectTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#1e40af'
  },
  projectDescription: { 
    fontSize: 14, 
    color: '#64748b', 
    lineHeight: 20
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 24
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981'
  },
  infoText: { 
    fontSize: 15, 
    marginBottom: 8, 
    color: '#334155',
    fontWeight: '500'
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 10
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#cbd5e1', 
    borderRadius: 10, 
    padding: 14, 
    height: 110, 
    textAlignVertical: 'top', 
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#0f172a'
  },
  button: {
    backgroundColor: '#1e40af',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  }
});