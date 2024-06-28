import { View, Input } from "react-native";
import React, { useState } from 'react';


export default function TelaLogin(){

    const [email,setEmail] = useState(null)
    const [senha,setSenha] = useState(null)

    return(
       
        <View style={style.conatiner}> 
        
                <Text> Aplicativo Agenda </Text>
             <Input
                placeholder="E-mail"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={value => this.setEmail(value)}
                keybordType="email-address"
              />
        
             <Input style={{color:black}}
                placeholder="senha"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={value => this.setSenha(value)}
                secureTexEntry={true}
              />
        
            <Button
                      title="LOG IN"
                      buttonStyle={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 30,
                      }}
                      containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                      }}
                      titleStyle={{ fontWeight: 'bold' }}
                    />
        
                </View>

    );
}