import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  CheckBox,
} from "react-native";
import { getData, postData, deleteData, getDummy } from "../../Api";

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
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View>
              <View>
                <Text style={styles.tittle}></Text>
              </View>
              <View>
                <ItemMenu title="Parte: " text={item.id} />
                <ItemMenu title="Parte: " text={item.brand} />
                <ItemMenu title="Parte: " text={item.name} />
                <ItemMenu title="Parte: " text={item.price} />
                <ItemMenu title="Parte: " text={item.quantity} />
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
  },
  tittleBlock: {
    marginBottom: 30,
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 22,
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