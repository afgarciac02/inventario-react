import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import NewPart from "../screens/NewPart";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewPart" component={NewPart} options={{}} />
    </Stack.Navigator>
  );
}
