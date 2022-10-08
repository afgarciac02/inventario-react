import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>Estamos readies</Text>
      <Button onPress={goToSettings} title="go to Setting" />
    </SafeAreaView>
  );
}
