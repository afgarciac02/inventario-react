import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import LoginForm from "./src/components/Auth/LoginForm";
//import Saludar from "./src/components/Auth/Saludar";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationInventory from "./src/navigation/NavigationInventory";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
      {/* <NavigationDrawer /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
