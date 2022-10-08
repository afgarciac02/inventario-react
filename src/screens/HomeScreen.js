import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

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
