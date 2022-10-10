import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio de Sesión"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventario"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Inventario",
          tabBarIcon: ({ color, size }) => (
            <Icon name="rocket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          tabBarLabel: "Menú",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function renderMenu() {
  return (
    <Image
      source={require("../image/menu.png")}
      style={{ width: 50, height: 50, top: -15 }}
    />
  );
}
