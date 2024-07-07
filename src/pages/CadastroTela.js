import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Telalogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        // Para simplificação, vamos assumir que se o email contém "professor", é uma conta de professor
        // E se o email contém "aluno", é uma conta de aluno
        if (email.includes("professor")) {
            navigation.navigate('DashboardProfessor');
        } else if (email.includes("aluno")) {
            navigation.navigate('DashboardAluno');
        } else {
            // Redirecionar para uma outra tela se não for professor nem aluno
            Alert.alert('Erro', 'Conta não reconhecida');
        }
    };

    return (
        <View style={style.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={style.containerHeader}>
                <Text style={style.mensagem}> Bem-vindo(a) </Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={style.containerForm}>
                <Text style={style.Title}>Email</Text>
                <TextInput
                    placeholder="Insira seu email"
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={style.Title}>Senha</Text>
                <TextInput
                    placeholder="Insira sua senha"
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={style.button} onPress={handleLogin}>
                    <Text style={style.textbutton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.regisButton} onPress={() => navigation.navigate('TelaCadastro')}>
                    <Text style={style.textregistre}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    mensagem: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%'
    },
    Title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbutton: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textregistre: {
        marginTop: 14,
        alignSelf: "center",
        color: "#a1a1a1"
    },
    regisButton: {}
});