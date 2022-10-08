import React from "react";
import { TextInput, Button, Text ,View} from "react-native"; 

export default function LoginForm(){
    return(
        <View>
            <TextInput placeholder="User"></TextInput>
            <TextInput placeholder="password"></TextInput>
            <Button title="Enviar" onPress={() => console.log("Enviado")}></Button>
        </View>
        
    );
}