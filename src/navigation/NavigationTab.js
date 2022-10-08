import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Account} />
      <Tab.Screen name="Menu" component={HomeScreen} />
      <Tab.Screen name="Listar inventario" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
