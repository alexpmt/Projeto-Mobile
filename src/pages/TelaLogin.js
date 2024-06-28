import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button


} from "react-native";
import React from "react-native"

import *as Animatable from 'react-native-animatable'


export default function Telalogin(){
    return(
        <View style={style.container}> 
            <Animatable.View  animation='fadeInLeft' delay={500} style={style.containerHeader}> 
                <Text style={style.mensagem}> Bem-vindo(a) </Text>
            </Animatable.View> 

            <Animatable.View  animation='fadeInUp' style={style.containerForm}>
                <Text style={style.Title}>Email</Text>
                <TextInput
                placeholder="Digite um email.."
                style={style.input}
                /> 

                 <Text style={style.Title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha.."
                style={style.input}
                /> 

                <TouchableOpacity style={style.button}>
                    <Text style={style.textbutton}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.regisButton}>
                    <Text style={style.textregistre}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}


const style = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#38a69d'

    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'

    },
    mensagem:{
        fontSize:28,
        fontWeight:'bold',
        color:'#FFF'
    },
    containerForm:{
        backgroundColor:'#FFF',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%'
    },
    Title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16
    },
    button:{
        backgroundColor:'#38a69d',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center'

    },
    textbutton:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold',


    },
    textregistre:{
            marginTop:14,
            alignSelf:"center",
            color:"#a1a1a1"
    },
    regisButton:{
        
    }
    
})


