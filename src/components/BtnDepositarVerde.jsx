import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/GlobalStyles";

const BtnDepositarConductor = () => {
  return (
    <View style={styles.btnDepositarVerde}>
      <Text style={styles.btnDepositarVerdeTexto}>Depositar</Text>
    </View>
  );
};

export default BtnDepositarConductor;