import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, Button, SafeAreaView } from "react-native";
import Agregar from "../components/Partes/Agregar";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = (SettingsScreen) => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>Menu</Text>
      {/* <Button onPress={goToSettings} title="go to Setting" /> */}
    </SafeAreaView>
  );
}
