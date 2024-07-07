import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DashboardProfessor() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard do Professor</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => {}} style={styles.navItem}>
            <Text style={styles.navItemText}>Criar Atividade</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.navItem}>
            <Text style={styles.navItemText}>Atividades</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Criar Atividade</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Título da Atividade:</Text>
            <TextInput style={styles.input} placeholder="Digite o título" />
            <Text style={styles.label}>Descrição:</Text>
            <TextInput style={styles.textarea} placeholder="Digite a descrição" multiline={true} />
            <Button title="Criar" onPress={() => {}} color="#4CAF50" />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atividades Criadas</Text>
          <View style={styles.atividade}>
            <Text style={styles.atividadeTitle}>Atividade 1</Text>
            <Text style={styles.atividadeDescricao}>Descrição da atividade 1.</Text>
          </View>
          <View style={styles.atividade}>
            <Text style={styles.atividadeTitle}>Atividade 2</Text>
            <Text style={styles.atividadeDescricao}>Descrição da atividade 2.</Text>
          </View>
          {/* Adicione mais atividades conforme necessário */}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Agenda Virtual</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    marginTop: 10,
  },
  navItem: {
    marginRight: 10,
  },
  navItemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  main: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  form: {
    flexDirection: 'column',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textarea: {
    height: 80,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  atividade: {
    marginBottom: 15,
  },
  atividadeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  atividadeDescricao: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});