import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Account() {
  return (
    <View>
      {auth ? <Text>Panel del Usuario</Text> : <Text>Formulario de Login</Text>}
      <Text>Account</Text>
    </View>
  );
}
