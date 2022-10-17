import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "./HomeScreen";
import { getData } from "../../Api";

const Touchable = (text = "Select a option", onPress) => {
  const TouchableComponent = () => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
        <Text style={StyleSheet.touchableText}>{text}</Text>
        <Icon name="chevron-right" color="#555" size={20} />
      </TouchableOpacity>
    );
  };
  return { TouchableComponent };
};

const Option = (item, value) => {
  const OptionComponent = () => {
    return (
      <TouchableOpacity>
        <Text>{item?.[value]}</Text>
      </TouchableOpacity>
    );
  };
  return { OptionComponent };
};

const Select = ({
  touchableComponent = Touchable,
  optionComponent = Option,
  touchableText = "",
  title = "",
  data = [],
  objkey = "id",
  objvalue,
}) => {
  const [visible, setVisible] = useState(false);
  const { TouchableComponent } = touchableComponent(touchableText, () =>
    setVisible(true)
  );

  function renderOption(item) {
    const { OptionComponent } = optionComponent(item, objvalue);
    return <OptionComponent />;
  }
  return (
    <>
      <TouchableComponent />
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Icon name="chevron-left" size={26} color={"#212121"} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={getData}
            keyExtractor={(_, HomeScreen) => String(HomeScreen)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#eee",
    borderBottomWidth: 0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  touchableText: {
    color: "#212121",
    fontSize: 10,
    fontWeight: "666",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 20,
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
  titleContainer: {
    flex: 1,
  },
  header: {
    borderBottomColor: "#eee",
    borderBottomWidth: 3,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
});

export default Select;
