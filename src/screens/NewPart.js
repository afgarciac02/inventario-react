import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, Button, SafeAreaView } from "react-native";
import Agregar from "../components/Partes/Agregar";

export default function NewPart(props) {
  const { navigation } = props;

  const goToNewPart = (Agregar) => {
    navigation.navigate("NewPart");
  };
  return (
    <SafeAreaView>
      <Text>Menu</Text>
      <Button
        onPress={() => navigation.navigate(goToNewPart)}
        title="Create Part"
      />
    </SafeAreaView>
  );
}
