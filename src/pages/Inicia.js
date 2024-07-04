import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import React from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Bemvindo() {
    const navigator = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/projeto.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={500} animation="fadeInUp" style={style.containerForm}>
                <Text style={style.title}>Agenda Inteligente</Text>
                <Text style={style.text}>Acesse com seu Login e Senha</Text>
                
                <TouchableOpacity style={style.button}
                    onPress={() => navigator.navigate('Telalogin')}
                >
                    <Text style={style.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.backButton} 
                    onPress={() => navigator.goBack()}
                >
                    <Text style={style.backButtonText}>Voltar</Text>
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
    containerLogo: {
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 28,
    },
    text: {
        color: '#000000'
    },
    button: {
        backgroundColor: "#38a69d",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    }
});
