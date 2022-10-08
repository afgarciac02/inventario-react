import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoginForm from "../components/LoginForm";

export default function Account() {
  return (
    <View>
      <LoginForm />
      <Text>Account</Text>
    </View>
  );
}
