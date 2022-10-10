import React, { useState, useEffect } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { getData } from "../../Api";

export default function SettingsScreen() {
  const [partes, setPartes] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPartes();
    })();
  }, []);

  const loadPartes = async () => {
    try {
      const response = await getData(nextUrl);
      setNextUrl(response.next);

      const partesArray = [];
      for await (const part of response.results) {
      }
    } catch (error) {}
  };

  return <SafeAreaView></SafeAreaView>;
}
/* export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>sccrrrrrr</Text>
    </SafeAreaView>
  );
} */
