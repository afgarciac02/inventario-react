import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Picker,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Agregar from "../components/Partes/Agregar";
import NewPart from "./NewPart";
import { getData, postData } from "../../Api";

export default function HomeScreen(props) {
  const { navigation } = props;
  const ir = useNavigation();
  const [products, setProducts] = useState({});
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getData("product");
      setProducts(response);
    } catch (error) {
      console.error("tenemos un error = " + error);
    }
  };

  const createUpdateProduct = async () => {
    try {
      let body = {
        id: "4",
        name: "S21",
        brand: "Samsung",
        price: 1000000,
        quantity: 10,
      };
      let response = "not found";
      if (body.id != 0) {
        response = await postData("product/update", body);
      } else {
        response = await postData("product/create", body);
      }
      // console.log('response = ', response);
    } catch (error) {
      console.error("tenemos un error = ", error);
    }
  };

  const goToSettings = (NewPart) => {
    navigation.navigate("NewPart");
  };
  console.log(products);
  return (
    <SafeAreaView>
      <Text style={styles.title}>Agregar Inventario</Text>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <Text style={styles.titlepa}>Marca</Text>
      <TextInput
        placeholder="Marca"
        style={styles.input}
        autoCapitalize="none"
      />
      <Text style={styles.titlepa}>Parte</Text>
      <TextInput
        placeholder="Nombre Parte"
        style={styles.input}
        autoCapitalize="none"
      />
      <Text style={styles.titlepa}>Precio</Text>
      <TextInput
        placeholder="Precio Parte"
        style={styles.input}
        autoCapitalize="none"
      />
      <Text style={styles.titlepa}>Cantidad</Text>
      <TextInput
        placeholder="Unidades Existentes"
        style={styles.input}
        autoCapitalize="none"
      />
      <Button
        style={styles.boton}
        onPress={goToSettings}
        title="go to Setting"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  titlepa: {
    height: 40,
    margin: 2,
    padding: 13,
  },
  boton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
});
