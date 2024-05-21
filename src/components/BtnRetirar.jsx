import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/GlobalStyles";

const BtnRetirar = () => {
  return (
    <View style={styles.btnRetirar}>
      <Text style={styles.btnRetirarTexto}>Retirar</Text>
    </View>
  );
};

export default BtnRetirar;
