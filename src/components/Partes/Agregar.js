import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Agregar() {
  const addAgregar = () => {
    console.log("Añadir a inventario");
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addAgregar}
      style={{ marginRight: 20 }}
    />
  );
}
