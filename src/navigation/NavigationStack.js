import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
/* import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen"; */

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    /*     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator> */

    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}
