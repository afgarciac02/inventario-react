import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";
import Saludar from "../components/Auth/Saludar";

export default function Account() {
  const { auth } = useAuth();
  return <View>{auth ? <Saludar /> : <LoginForm />}</View>;
}
