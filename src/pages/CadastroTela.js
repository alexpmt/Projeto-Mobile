import React, { useState } from 'react';
<<<<<<< HEAD
import { View, StyleSheet, Image, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, Button, Text, Title, RadioButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePickerModal } from 'react-native-paper-dates';
import { Provider as PaperProvider } from 'react-native-paper';
=======
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
>>>>>>> 379c637ed25d36ee8a136bf1093dffde4f1609a9

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const options = [
    { label: 'Professor', value: 'professor' },
    { label: 'Aluno', value: 'aluno' },
  ];

  const theme = useTheme();

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
=======

  const navigation = useNavigation();
>>>>>>> 379c637ed25d36ee8a136bf1093dffde4f1609a9

  const handleRegister = () => {
    Alert.alert('Cadastro realizado com sucesso!', `Nome: ${name}\nEmail: ${email}\nOpção: ${selectedOption}\nData de Nascimento: ${birthDate.toLocaleDateString('pt-BR')}`);
  };

  const handleConfirmDate = (params) => {
    setDatePickerVisible(false);
    setBirthDate(params.date);
  };

  return (
<<<<<<< HEAD
    <PaperProvider>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          locale="pt" // Configuração para português
        />
      </KeyboardAvoidingView>
    </PaperProvider>
=======
    <ImageBackground
      source={require('../assets/projeto.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Faça seu cadastro, é simples e rápido!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome (Fulano da Silva)"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email (example@email.com)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Crie sua senha (Máx: 6 caracteres)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
>>>>>>> 379c637ed25d36ee8a136bf1093dffde4f1609a9
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cobrir todo o conteúdo
    justifyContent: 'center',
  },
  container: {
    flex: 1,
<<<<<<< HEAD
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
=======
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#B0E0E6'
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
>>>>>>> 379c637ed25d36ee8a136bf1093dffde4f1609a9
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
<<<<<<< HEAD
    color: '#004080', // Azul escuro
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
=======
    textAlign: 'center',
    color: '#000000'
  },
  input: {
    height: 40,
    borderColor: '#38a69d',
    borderWidth: 1,
>>>>>>> 379c637ed25d36ee8a136bf1093dffde4f1609a9
    marginBottom: 10,
  },
  dateButton: {
    marginBottom: 15,
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    borderRadius: 5,
    color: "#000000"
  },
  registerButton: {
    backgroundColor: '#38a69d', // Cor desejada
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
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
    backgroundColor: '#004080', // Azul escuro
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonContent: {
    height: 50,
  },
});
