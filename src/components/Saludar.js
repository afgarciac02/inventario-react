import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { user } = props;
  return (
    <View>
      <Text> Bienvenido {user} </Text>
    </View>
  );
}

Saludar.defaultProps = {
  user: "usuario no registrado",
};

Saludar.propTypes = {
  user: PropTypes.string.isRequired,
};
