import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/GlobalStyles";

const BtnSubmit = ({title}) => {
  return (
    <View style={styles.btnSubmit}>
      <Text style={styles.btnSubmitTexto}>{title}</Text>
    </View>
  );
};

export default BtnSubmit;
