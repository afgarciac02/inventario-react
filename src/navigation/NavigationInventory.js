import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function NavigationInventory() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={HomeScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Inventario"
        component={SettingsScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
