import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getData, postData, deleteData, getDummy } from "../../Api";
import { NumericFormat } from "react-number-format";
import { NewPart } from "./NewPart";
import CheckBox from "@react-native-community/checkbox";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const [products, setProducts] = useState({});
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      //await createUpdateProduct();
      //await DeleteProduct('4');
      await loadProducts();
    })();
  }, []);

  const loadProducts = async () => {
    try {
      //const response = await getData("product");
      const response = getDummy();
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

  const DeleteProduct = async (id) => {
    try {
      let response = await deleteData("product/delete/" + id);
      console.log(response);
    } catch (error) {
      console.error("tenemos un error = ", error);
    }
  };

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.tittleBlock}>
      <Text style={styles.tittle}>Stock Actual</Text>
      <TouchableOpacity onPress={(NewPart) => {}}>
        <Text>New Part</Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={styles.content}>
              <View>
                <View>
                  <Text> </Text>
                  <ItemMenu title="Id: " text={item.id} />
                  <ItemMenu title="Marca: " text={item.brand} />
                  <ItemMenu title="Parte: " text={item.name} />
                  <ItemMenu title="Precio: " text={item.price} />
                  <ItemMenu title="Unidades: " text={item.quantity} />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTittle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  tittleBlock: {
    marginBottom: 30,
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9E9E9E",
    color: "white",
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#FF0101",
  },
  itemMenuTittle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogOut: {
    paddingTop: 20,
  },
});
