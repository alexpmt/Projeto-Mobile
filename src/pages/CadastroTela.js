import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert, KeyboardAvoidingView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput, Button, Text, Title, RadioButton, useTheme, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePickerModal } from 'react-native-paper-dates';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const options = [
    { label: 'Professor', value: 'professor' },
    { label: 'Aluno', value: 'aluno' },
  ];

  const theme = useTheme();
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Email inválido');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial');
      return;
    }

    if (!selectedOption) {
      setErrorMessage('Você deve selecionar uma opção.');
      return;
    }

    if (!birthDate) {
      setErrorMessage('Você deve selecionar uma data de nascimento.');
      return;
    }

    setErrorMessage('');
    handleRegister();
  };

  const handleRegister = () => {
    Alert.alert('Cadastro realizado com sucesso!', `Nome: ${name}\nEmail: ${email}\nOpção: ${selectedOption}\nData de Nascimento: ${birthDate.toLocaleDateString('pt-BR')}`);
  };

  const handleConfirmDate = (params) => {
    setDatePickerVisible(false);
    setBirthDate(params.date);
  };

  return (
    <PaperProvider>
      <ImageBackground
        source={require('../assets/projeto.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://example.com/your-logo.png' }}
                style={styles.logo}
              />
              <Title style={styles.title}>Cadastro</Title>
            </View>

            <TextInput
              label="Nome"
              value={name}
              onChangeText={setName}
              style={styles.input}
              left={<TextInput.Icon name={() => <Icon name="account" size={24} />} />}
            />

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              left={<TextInput.Icon name={() => <Icon name="email" size={24} />} />}
            />

            <TextInput
              label="Senha"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
              left={<TextInput.Icon name={() => <Icon name="lock" size={24} />} />}
            />

            <View style={styles.radioContainer}>
              {options.map(option => (
                <View key={option.value} style={styles.option}>
                  <RadioButton
                    value={option.value}
                    status={selectedOption === option.value ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedOption(option.value)}
                  />
                  <Text>{option.label}</Text>
                </View>
              ))}
            </View>

            <Button onPress={() => setDatePickerVisible(true)} style={styles.dateButton}>
              Selecione sua data de nascimento
            </Button>
            {birthDate ? <Text style={styles.dateText}>Data de Nascimento: {birthDate.toLocaleDateString('pt-BR')}</Text> : null}

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <Button
              mode="contained"
              onPress={handleSignup}
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              Cadastrar
            </Button>
          </ScrollView>

          <DatePickerModal
            mode="single"
            visible={isDatePickerVisible}
            onDismiss={() => setDatePickerVisible(false)}
            date={birthDate}
            onConfirm={handleConfirmDate}
            saveLabel="Confirmar"
            label="Selecione a data"
            animationType="slide"
            locale="pt"
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004080',
  },
  input: {
    marginBottom: 15,
  },
  radioContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateButton: {
    marginBottom: 15,
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    borderRadius: 5,
    color: "#000000"
  },
  dateText: {
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#004080',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonContent: {
    height: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#38a69d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
