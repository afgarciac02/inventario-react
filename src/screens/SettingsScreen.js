import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getData, deleteData, getDummy } from "../../Api";

export default function SettingsScreen() {
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
      //const response = getDummy();
      setProducts(response);
    } catch (error) {
      console.error("tenemos un error = " + error);
    }
  };


  const DeleteProduct = async (id) => {
    try {
      console.log("click = "+id);
      let response = await deleteData("product/delete/" + id);
      // console.log(response);
    } catch (error) {
      console.error("tenemos un error = ", error);
    }
  };
  console.log('products = ', products);
  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
        <View style={styles.tittleBlock}>
          <Text style={styles.tittle}>Stock Actual</Text>
          <TouchableOpacity onPress={(NewPart) => { loadProducts }}>
            <Text>RELOAD</Text>
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
                      <Button
                        style={styles.boton}
                        onPress={() => DeleteProduct(item.id)}
                        title="Enviar"
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    overflow: "scroll",
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
  scroll: {
    overflow: "scroll",
  },
});
