import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DashboardAluno() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard do Aluno</Text>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Atividades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Enviar Respostas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atividades</Text>
          <View style={styles.atividade}>
            <Text style={styles.atividadeTitle}>Atividade 1</Text>
            <Text style={styles.atividadeDescription}>Descrição da atividade 1.</Text>
          </View>
          <View style={styles.atividade}>
            <Text style={styles.atividadeTitle}>Atividade 2</Text>
            <Text style={styles.atividadeDescription}>Descrição da atividade 2.</Text>
          </View>
          {/* Adicione mais atividades conforme necessário */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enviar Respostas</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Escolha a atividade:</Text>
            <View style={styles.input}>
              <Text>Atividade 1</Text>
            </View>
            <View style={styles.input}>
              <Text>Atividade 2</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Agenda Virtual</Text>
      </View>
    </View>
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    marginTop: 10,
  },
  navItem: {
    marginHorizontal: 10,
  },
  navText: {
    color: 'white',
    fontWeight: 'bold',
  },
  main: {
    padding: 20,
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  atividade: {
    marginBottom: 15,
  },
  atividadeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  atividadeDescription: {
    fontSize: 14,
    color: '#555',
  },
  form: {
    flexDirection: 'column',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    color: 'white',
  },
});