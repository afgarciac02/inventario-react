import React, { useState, useEffect } from "react";
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import { getData, postData, deleteData } from "../../Api";

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
      const response = await getData('product');
      setProducts(response);
    } catch (error) { console.error('tenemos un error = ' + error) }
  };

  const createUpdateProduct = async () => {
    try {
      let body = {
        "id": "4",
        "name": "S21",
        "brand": "Samsung",
        "price": 1000000,
        "quantity": 10
      }
      let response = 'not found';
      if (body.id != 0) {
        response = await postData('product/update', body)
      } else {
        response =  await postData('product/create', body)
      }
      // console.log('response = ', response);
    } catch (error) {
      console.error('tenemos un error = ', error);
    }
  }

  const DeleteProduct = async (id) => {
    try {
      let response = await deleteData('product/delete/'+id)
      console.log(response);
    } catch (error) {
      console.error('tenemos un error = ', error);
    }
  }

  return <View>
    <FlatList
      data={products}
      renderItem={({ item }) => {
        console.log(item)
        return (
          <>
            <Text>{item.id}</Text>
            <Text>{item.brand}</Text>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Text>---------------</Text>
          </>
        )
      }
      }
    />
  </View>;
}