import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  //  Picker,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Agregar from "../components/Partes/Agregar";
import NewPart from "./NewPart";
import { getData, postData } from "../../Api";
import Select from "./NewPart";
import {Picker} from '@react-native-picker/picker';
import { DrawerItem } from "@react-navigation/drawer";

export default function HomeScreen(props) {
  const { navigation } = props;
  const ir = useNavigation();
  const [products, setProducts] = useState([]);
  const [select, setSelected] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [marca, setMarca] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  
  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getData("product");
      //const response = getDummy();
      let name = []
      setProducts(response);
      for (let x of response) {
        name.push(x.name);
      }
      setSelected(name);
    } catch (error) {
      console.error("tenemos un error = " + error);
    }
  };

  const createUpdateProduct = async () => {
    try {
      let response = "not found";
      console.log(selectedId);
      if (selectedId === undefined || selectedId === '') {
        let body = {
          name: nombre,
          brand: marca,
          price: precio,
          quantity: cantidad,
        };
        response = await postData("product/create", body);
        console.log('res if =', response);
      } else {
        let found = products.find(element => element.name == selectedId);
        let body = {
          id: found.id,
          name: nombre,
          brand: marca,
          price: precio,
          quantity: cantidad,
        };
        response = await postData("product/update", body);
        console.log('res else =', response);
      }
    } catch (error) {
      console.error("tenemos un error = ", error);
    }
  };

  const goToSettings = (NewPart) => {
    navigation.navigate("NewPart");
  };

  let serviceItems = select.map( (s, i) => {
    return <Picker.Item value={s} label={s} />
  });

  return (
    <SafeAreaView style={styles.cardContainer} >
      < ScrollView >
        <Text style={styles.title}>Agregar Inventario</Text>
        <Text style={styles.titlepa}>Seleccionar ID: </Text>
        <Picker
          selectedValue={selectedId}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedId(itemValue)
          }>
          {serviceItems}
        </Picker>
        <Text style={styles.titlepa}>Marca: </Text>
        <TextInput
          placeholder="Marca"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(x) => setMarca(x)}
        />
        <Text style={styles.titlepa}>Nombre: </Text>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(x) =>setNombre(x)}
        />
        <Text style={styles.titlepa}>Precio: </Text>
        <TextInput
          placeholder="Precio"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(x) =>setPrecio(x)}
        />
        <Text style={styles.titlepa}>Cantidad: </Text>
        <TextInput
          placeholder="Unidades Existentes"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(x) =>setCantidad(x)}
        />
        <Button
          style={styles.boton}
          onPress={createUpdateProduct}
          title="Enviar"
        />
      </ScrollView>
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
    padding: 10,
  },
  boton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  select: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  cardContainer: {
    overflow: "scroll",
    transition: 0.5
  }
});
