import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Main from "./src/screens/Main";
import Button from "./src/components/ButtonEjemplo";
import styles from "./src/styles/GlobalStyles";
import BtnSubmit from "./src/components/BtnSubmit";
import BtnDepositarVerde from "./src/components/BtnDepositarVerde";
import BtnDepositarAzul from "./src/components/BtnDepositarAzul";
import BtnRetirar from "./src/components/BtnRetirar";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componentes</Text>
      <Button title="Press me!" onPress={() => alert("Button Pressed!")} />
      <BtnSubmit title="Label"/>
      <BtnDepositarVerde/>
      <BtnRetirar/>
      <BtnDepositarAzul/>
    </View>
    
  );
}
