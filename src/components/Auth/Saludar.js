import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

export default function Saludar() {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.tittleBlock}>
        <Text style={styles.tittle}>Bienvenido,</Text>
        <Text style={styles.tittle}>
          {`${auth.firstName} ${auth.lastName}`}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre: "
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title="Username: " text={auth.username} />
        <ItemMenu title="Email: " text={auth.email} />
        <ItemMenu title="Total Partes: " text={`0 Partes`} />
      </View>
      <Button title="Desconectarse" onPress={logout} style={styles.btnLogOut} />
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
